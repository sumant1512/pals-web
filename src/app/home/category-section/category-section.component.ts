import { Component } from '@angular/core';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
})
export class CategorySectionComponent {
  categories = [
    {
      title: 'Exterior Paint',
      description:
        'Bring life to your walls with Pals Paint’s durable exterior paints, offering vibrant colors, weather-resistant protection, and long-lasting finishes for every outdoor surface.',
      image: 'category/exterior.webp',
      imageAlt: 'Exterior Paint',
    },
    {
      title: 'Interior Paint',
      description:
        'Explore Pals Paint’s premium interior paints for every style, offering vibrant colors, smooth finishes, and long-lasting protection for your walls.',
      image: 'category/interior.webp',
      imageAlt: 'Interior Paint',
    },
    {
      title: 'Pals Putty',
      description:
        'Perfect your walls with Pals Putty, for a smooth, flawless finish and long-lasting protection before painting.',
      image: 'category/putty.png',
      imageAlt: 'Pals Putty',
    },
    {
      title: 'Lime Wash',
      description:
        'Bring timeless elegance to your walls with Pals Lime Wash, a natural, eco-friendly coating that enhances texture, durability, and beauty for both interiors and exteriors.',
      image: 'category/lime_wash.png',
      imageAlt: 'Lime Wash',
    },
  ];
}
