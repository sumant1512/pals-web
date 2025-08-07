import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { ViewCouponComponent } from './view-coupon/view-coupon.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { ViewDealersComponent } from './view-dealers/view-dealers.component';
import { DealerLedgerComponent } from './dealer-ledger/dealer-ledger.component';
import { DealerCreditRequestComponent } from './dealer-credit-request/dealer-credit-request.component';
import { DealerTrasactionComponent } from './dealer-trasaction/dealer-trasaction.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: APP_ROUTES.ADMIN.CHILD_ROUTES.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: APP_ROUTES.ADMIN.CHILD_ROUTES.DASHBOARD,
        component: AdminDashboardComponent,
      },
      {
        path: APP_ROUTES.ADMIN.CHILD_ROUTES.CREATE_COUPON,
        component: CreateCouponComponent,
      },
      {
        path: APP_ROUTES.ADMIN.CHILD_ROUTES.VIEW_COUPON,
        component: ViewCouponComponent,
      },
      {
        path: APP_ROUTES.ADMIN.CHILD_ROUTES.ADD_DEALER,
        component: AddDealerComponent,
      },
      {
        path: APP_ROUTES.ADMIN.CHILD_ROUTES.VIEW_DEALER,
        component: ViewDealersComponent,
      },
      {
        path: APP_ROUTES.ADMIN.CHILD_ROUTES.DEALER_LEDGER,
        component: DealerLedgerComponent,
      },
      {
        path: `${APP_ROUTES.ADMIN.CHILD_ROUTES.DEALER_TRANSACTIONS}/:id`,
        component: DealerTrasactionComponent,
      },
      {
        path: APP_ROUTES.ADMIN.CHILD_ROUTES.DEALER_CREDIT_REQUEST,
        component: DealerCreditRequestComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
