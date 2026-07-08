import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionStorageService } from './session-storage.service';
import { VERIFICATION_APP_ID } from '../constants/config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private sessionStorageService: SessionStorageService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this.sessionStorageService.getItem('authToken');

    const requestHeaders: any = {};

    if (authToken) {
      requestHeaders['Authorization'] = `Bearer ${authToken}`;
    }

    requestHeaders['X-Verification-App-Id'] = VERIFICATION_APP_ID;

    const clonedRequest = request.clone({
      setHeaders: requestHeaders,
    });

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.warn('⚠️ 401 Unauthorized → clearing session storage');
          this.sessionStorageService.clearAll();
        }
        return throwError(() => error);
      })
    );
  }
}
