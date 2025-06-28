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
        'Enhance your outdoors with paints and textures for every style.',
      image: './../../../assets/category/exterior.png',
      imageAlt: 'Exterior Paint',
    },
    {
      title: 'Interior Paint',
      description:
        'Explore interior paints for every style, including our Royale designer collection.',
      image: './../../../assets/category/interior.png',
      imageAlt: 'Interior Paint',
    },
    {
      title: 'Pals Putty',
      description:
        'Perfect your walls with Pal’s Putty for a smooth, flawless finish.',
      image: './../../../assets/category/putty.png',
      imageAlt: 'Pals Putty',
    },
    {
      title: 'Lime Wash',
      description:
        'Bring timeless elegance to your walls with Pal’s Lime Wash.',
      image: './../../../assets/category/lime_wash.png',
      imageAlt: 'Lime Wash',
    },
  ];
}
