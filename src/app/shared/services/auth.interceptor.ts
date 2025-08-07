import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = sessionStorage.getItem('authToken'); // Get the token from AuthService

    const urlsToIntercept = [
      'https://api.example.com',
      'https://api.another.com',
    ];

    // if (urlsToIntercept.some(url => request.url.startsWith(url))) {
    const clonedRequest = request.clone({
      setHeaders: {
        authorization: `Bearer ${authToken}`,
      },
    });
    return next.handle(clonedRequest);
    // } else {
    //   return next.handle(request);
    // }
  }
}
