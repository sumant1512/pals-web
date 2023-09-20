import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { APP_ROUTES } from '../shared/constants/app-routes.constants';
import { QrCreateFormComponent } from './qr-create-form/qr-create-form.component';
import { QrListComponent } from './qr-list/qr-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: APP_ROUTES.ADMIN.CHILD_ROUTES.CREATE_QR,
        component: QrCreateFormComponent,
      },
      {
        path: APP_ROUTES.ADMIN.CHILD_ROUTES.LIST_QR,
        component: QrListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
