import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ProductCardComponent, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
