import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authToken = sessionStorage.getItem('authToken');
  const userType = sessionStorage.getItem('userType');
  const router = inject(Router);
  if (authToken && userType === 'Admin') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  // return authToken ? true : router.navigate(['']);
};
