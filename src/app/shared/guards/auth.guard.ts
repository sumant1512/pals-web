import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const sessionStorageService = inject(SessionStorageService);
  const router = inject(Router);
  const authToken = sessionStorageService.getItem('authToken');
  const userType = sessionStorageService.getItem('userType');
  if (authToken && userType === 'Admin') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  // return authToken ? true : router.navigate(['']);
};
