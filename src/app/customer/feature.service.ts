import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface FeatureFlags {
  [key: string]: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private flags$ = new BehaviorSubject<FeatureFlags>({});

  constructor(private http: HttpClient) {}

  loadFlags(): Observable<FeatureFlags> {
    return this.http.get<FeatureFlags>('feature-flags.json').pipe(
      map((flags) => {
        this.flags$.next(flags);
        return flags;
      })
    );
  }

  /** Check if a specific flag is enabled */
  isEnabled(flag: string): boolean {
    return !!this.flags$.value[flag];
  }

  /** Get all flags as observable (for reactive use) */
  get flags(): Observable<FeatureFlags> {
    return this.flags$.asObservable();
  }
}
