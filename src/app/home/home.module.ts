import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { BannerComponent } from './banner/banner.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialCardComponent } from './testimonials/testimonial-card/testimonial-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactUsComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    BannerComponent,
    ProductCardComponent,
    TestimonialCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
})
export class HomeModule {}
