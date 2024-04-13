import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TryOnRoutingModule } from './try-on-routing.module';
import { TryOnComponent } from './try-on.component';
import { SharedModule } from '../shared/shared.module';
import { TryOnDialogComponent } from './try-on-dialog/try-on-dialog.component';

@NgModule({
  declarations: [TryOnComponent, TryOnDialogComponent],
  imports: [CommonModule, TryOnRoutingModule, SharedModule],
})
export class TryOnModule {}
