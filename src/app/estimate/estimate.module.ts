import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimateRoutingModule } from './estimate-routing.module';
import { EstimatePreviewComponent } from './estimate-preview/estimate-preview.component';
import { SharedModule } from '../shared/shared.module';
import { EstimateComponent } from './estimate.component';

@NgModule({
  declarations: [EstimatePreviewComponent, EstimateComponent],
  imports: [CommonModule, EstimateRoutingModule, SharedModule],
})
export class EstimateModule {}
