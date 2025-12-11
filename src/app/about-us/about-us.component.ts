import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  palsCapabilities = [
    {
      sequence: `${window.location.origin}/one.webp`,
      heading: 'Our Strengths',
      description:
        'Pals Paint manufactures and markets a wide range of decorative paints for homes, offices and commercial spaces. Its industrial and performance coatings cater to various sectors, including automotive, infrastructure, engineering, consumer goods and construction, providing reliable and durable surface-protection solutions.',
    },
    {
      sequence: `${window.location.origin}/two.webp`,
      heading: 'Our Capabilities',
      description:
        'The company’s chemicals and specialty products division supports industries such as polymers, composites, packaging and manufacturing. With a strong focus on R&D, Pals Paint introduces new technologies and formulations each year to strengthen its position as an innovative specialty materials and coatings company.',
    },
    {
      sequence: `${window.location.origin}/three.webp`,
      heading: 'Our Expertise',
      description:
        'Pals Paint operates modern, environmentally compliant manufacturing facilities supported by a skilled workforce and strong distribution network. The company prioritizes Health, Safety, Environment & Sustainability to protect its people and community.',
    },
  ];
}
