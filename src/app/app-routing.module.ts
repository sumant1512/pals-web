import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/constants/app-routes.constants';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: APP_ROUTES.ABOUT_US.PARENT,
    loadChildren: () =>
      import('./about-us/about-us.component').then((m) => m.AboutUsComponent),
  },
  {
    path: APP_ROUTES.PRODUCTS.PARENT,
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: APP_ROUTES.TRY_ON,
    loadChildren: () =>
      import('./try-on/try-on.module').then((m) => m.TryOnModule),
  },
  {
    path: APP_ROUTES.CART.PARENT,
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
    canActivate: [authGuard],
  },
  {
    path: APP_ROUTES.ADMIN.PARENT,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard],
  },
  {
    path: APP_ROUTES.ESTIMATE.PARENT,
    loadChildren: () =>
      import('./estimate/estimate.module').then((m) => m.EstimateModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
