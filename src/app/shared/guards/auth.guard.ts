import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authInfo = JSON.parse(localStorage.getItem('authInfo') as string);
  const router = inject(Router);
  return authInfo?.token ? true : router.navigate(['']);
};
