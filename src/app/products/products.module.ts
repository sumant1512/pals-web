import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ShadeDialogComponent } from './shade-dialog/shade-dialog.component';
import { ProductListComponent } from './product-list/product-list.component';
import { GroupByPipe } from './shade-dialog/group-by.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ShadeDialogComponent,
    ProductListComponent,
    GroupByPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
