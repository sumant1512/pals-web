import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimateComponent } from './estimate.component';
import { EstimatePreviewComponent } from './estimate-preview/estimate-preview.component';

const routes: Routes = [
  {
    path: '',
    component: EstimateComponent,
    children: [{ path: 'preview', component: EstimatePreviewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimateRoutingModule {}
