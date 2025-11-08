import { Component } from '@angular/core';
import { ContactUsForm } from './contact-us.form';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactForm = ContactUsForm();
  isModalOpen = false;
  modalMessage = '';

  constructor(private readonly homeService: HomeService) {}

  closeModal(): void {
    this.isModalOpen = false;
  }

  contact(): void {
    if (this.contactForm.valid) {
      this.homeService
        .contactUs(this.contactForm.value)
        .subscribe((response) => {
          console.log('Contact request sent successfully:', response);
        });
    }
  }
}
