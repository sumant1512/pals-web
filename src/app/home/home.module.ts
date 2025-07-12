import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BannerComponent } from './banner/banner.component';
import { TestimonialCardComponent } from './testimonials/testimonial-card/testimonial-card.component';
import { LoginComponent } from './login/login.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { FaqComponent } from './faq/faq.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactUsComponent,
    BannerComponent,
    TestimonialCardComponent,
    LoginComponent,
    ProductCarouselComponent,
    CategorySectionComponent,
    FaqComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
  ],
})
export class HomeModule {}
