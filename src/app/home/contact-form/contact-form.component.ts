import { Component } from '@angular/core';
import { ContactForm } from './contact-form';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm = ContactForm();
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
          if (response?.status) {
            this.contactForm.reset();
          }
        });
    }
  }
}
