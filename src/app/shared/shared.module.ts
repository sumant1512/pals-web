import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShadeSelectorComponent } from './components/shade-selector/shade-selector.component';
import { HeadingChipsComponent } from './components/heading-chips/heading-chips.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ShadeSelectorComponent,
    HeadingChipsComponent,
    NavButtonComponent,
    SkeletonComponent,
    ContactFormComponent,
    FaqComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  exports: [
    ProductCardComponent,
    ShadeSelectorComponent,
    HeadingChipsComponent,
    FormsModule,
    ReactiveFormsModule,
    NavButtonComponent,
    SkeletonComponent,
    TranslateModule,
    ContactFormComponent,
    FaqComponent,
  ],
})
export class SharedModule {}
