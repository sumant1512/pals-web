import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShadeSelectorComponent } from './components/shade-selector/shade-selector.component';
import { HeadingChipsComponent } from './components/heading-chips/heading-chips.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProductCardComponent,
    ShadeSelectorComponent,
    HeadingChipsComponent,
    NavButtonComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  exports: [
    ProductCardComponent,
    ShadeSelectorComponent,
    HeadingChipsComponent,
    FormsModule,
    ReactiveFormsModule,
    NavButtonComponent,
    TranslateModule,
  ],
})
export class SharedModule {}
