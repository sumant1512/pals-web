import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Don't preload admin routes unless needed
    if (route.path?.includes('admin')) {
      return of(null);
    }
    
    // Preload other routes after a delay to reduce initial load
    return timer(3000).pipe(
      mergeMap(() => load())
    );
  }
}
