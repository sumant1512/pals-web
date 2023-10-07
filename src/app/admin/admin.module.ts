import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCreateFormComponent } from './qr-create-form/qr-create-form.component';
import { QrListComponent } from './qr-list/qr-list.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    QrCreateFormComponent,
    QrListComponent,
    PaymentRequestComponent,
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
