import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  leftQuestions = [
    {
      question: 'Product Consultation & Guidance',
      answer:
        'Pals Paint offers expert paint consultation to help customers choose the best colors, finishes, and products. Our team examines space, lighting, and surface needs to recommend durable, professional solutions. We ensure customers receive perfect results with personalized guidance.',
    },
    {
      question: 'Quality Product Range',
      answer:
        'Pals Paint provides a premium range of high-quality paints designed for durability, smooth coverage, and long-lasting color. Our products resist peeling and fading, ensuring beautiful walls for years. From emulsions to primers, every Pals Paint product meets strict quality standards.',
    },
    {
      question: 'Delivery Support',
      answer:
        'Pals Paint offers fast, safe, and reliable delivery to homes and project sites. We ensure timely product dispatch with secure packaging to avoid damage. Our efficient delivery service helps customers complete their painting projects without delays.',
    },
  ];
  rightQuestions = [
    {
      question: 'Customer-Centric Policies',
      answer:
        'Pals Paint follows transparent and flexible customer-focused policies. We ensure easy ordering, clear pricing, and strong after-sales support. Any product-related concerns are resolved quickly, giving customers a smooth, trustworthy, and satisfying experience.',
    },
    {
      question: 'Responsive Contact & Inquiry Handling',
      answer:
        'Pals Paint provides quick and professional responses to all customer inquiries. Whether through phone, WhatsApp, or email, our support team offers accurate product details, pricing, and technical help. Fast communication ensures a smooth customer experience.',
    },
    {
      question: 'Strong Support Team / Skilled Workforce',
      answer:
        'Pals Paint is backed by a skilled and experienced workforce dedicated to quality and service. Our team handles production, testing, customer support, and technical assistance, ensuring reliable products and expert help whenever needed.',
    },
  ];
}
