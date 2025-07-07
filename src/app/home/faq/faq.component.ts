import { Component } from '@angular/core';
import { faqs } from 'src/app/products/product/faq.contants';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqQuestions = faqs;
}
