import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BannerComponent } from './banner/banner.component';
import { TestimonialCardComponent } from './testimonials/testimonial-card/testimonial-card.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactUsComponent,
    BannerComponent,
    TestimonialCardComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class HomeModule {}
