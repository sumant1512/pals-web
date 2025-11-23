import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FAQS } from 'src/app/products/product/faq.contants';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqQuestions = FAQS;

  constructor(private readonly router: Router) {}

  navigateToContactsPage(): void {
    this.router.navigate([APP_ROUTES.CONTACT_US.PARENT]);
  }
}
