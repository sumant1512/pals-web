import { Component } from '@angular/core';
import { ContactUsForm } from './contact-us.form';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactForm = ContactUsForm();

  contact(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
