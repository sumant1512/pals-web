import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShadeSelectorComponent } from './components/shade-selector/shade-selector.component';
import { HeadingChipsComponent } from './components/heading-chips/heading-chips.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ShadeSelectorComponent,
    HeadingChipsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ProductCardComponent,
    ShadeSelectorComponent,
    HeadingChipsComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
