import { Component } from '@angular/core';
import { ContactUsForm } from './contact-us.form';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactForm = ContactUsForm();
  isModalOpen = false;
  modalMessage = '';

  closeModal(): void {
    this.isModalOpen = false;
  }

  contact(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      emailjs
        .send(
          'service_5vbppd5',
          'template_q1tnor7',
          {
            name: this.contactForm.value.name,
            email: this.contactForm.value.email,
            phone: this.contactForm.value.phone,
            message: this.contactForm.value.message,
          },
          'SxqZlqYGgxgAgw6he'
        )
        .then(
          (response: EmailJSResponseStatus) => {
            this.contactForm.reset();
            this.isModalOpen = true;
            this.modalMessage =
              'Thank you for contacting us. We will get back to you withing 24 hours.';
          },
          (error) => {
            this.isModalOpen = true;
            this.modalMessage =
              'Thank you for trying to connect with us. Currently we are facing some problem. Please try after sometime.';
          }
        );
    }
  }
}
