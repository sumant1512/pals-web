import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShadeSelectorComponent } from './components/shade-selector/shade-selector.component';

@NgModule({
  declarations: [ProductCardComponent, ShadeSelectorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ProductCardComponent,
    ShadeSelectorComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
