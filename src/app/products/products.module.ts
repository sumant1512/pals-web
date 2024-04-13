import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ShadeDialogComponent } from './shade-dialog/shade-dialog.component';
import { TryOnDialogComponent } from './try-on-dialog/try-on-dialog.component';
import { ShadeSelectorComponent } from './shade-selector/shade-selector.component';
import { TryOnDialogSvgComponent } from './try-on-dialog-svg/try-on-dialog-svg.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ShadeDialogComponent,
    TryOnDialogComponent,
    ShadeSelectorComponent,
    TryOnDialogSvgComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
