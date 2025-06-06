import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimateRoutingModule } from './estimate-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EstimateComponent } from './estimate.component';

@NgModule({
  declarations: [EstimateComponent],
  imports: [CommonModule, EstimateRoutingModule, SharedModule],
})
export class EstimateModule {}
