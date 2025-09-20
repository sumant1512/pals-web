import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { QRCodeModule } from 'angularx-qrcode';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { ViewCouponComponent } from './view-coupon/view-coupon.component';
import { DealerLedgerComponent } from './dealer-ledger/dealer-ledger.component';
import { DealerCreditRequestComponent } from './dealer-credit-request/dealer-credit-request.component';
import { ViewDealersComponent } from './view-dealers/view-dealers.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { DealerTrasactionComponent } from './dealer-trasaction/dealer-trasaction.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminDashboardComponent,
    CreateCouponComponent,
    ViewCouponComponent,
    DealerLedgerComponent,
    DealerCreditRequestComponent,
    ViewDealersComponent,
    AddDealerComponent,
    DealerTrasactionComponent,
    AddProductComponent,
    ViewProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
  ],
})
export class AdminModule {}
