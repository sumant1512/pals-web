import { Component } from '@angular/core';
import { faqs } from 'src/app/products/product/faq.contants';
import { HeaderScrollService } from 'src/app/shared/services/header-scroll.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqQuestions = faqs;

  constructor(private readonly headerScrollService: HeaderScrollService) {}

  navigateToContactsPage(): void {
    const toggleDataEmit = {
      toggleStatus: false,
      selectedPage: 'contact',
    };
    this.headerScrollService.updateToggleData(toggleDataEmit);
  }
}
