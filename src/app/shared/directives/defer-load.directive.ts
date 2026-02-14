import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

/**
 * Directive to defer non-critical image loading
 * Usage: <img src="image.jpg" appDeferLoad />
 */
@Directive({
  selector: 'img[appDeferLoad]',
  standalone: true
})
export class DeferLoadDirective {
  @Input() appDeferLoad: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Set loading to lazy by default
    this.renderer.setAttribute(this.el.nativeElement, 'loading', 'lazy');
  }

  @HostListener('error')
  onError() {
    // Fallback for broken images
    console.warn('Image failed to load:', this.el.nativeElement.src);
  }
}
