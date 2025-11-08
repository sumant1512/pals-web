import {
  Component,
  AfterViewInit,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements AfterViewInit {
  @Input() loading = false;
  @Input() borderRadius?: string | number;
  @Input() height?: string | number;
  @Input() width?: string | number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // ensure correct positioning when loading
    const host = this.el.nativeElement.querySelector('.skeleton-container');
    if (this.loading) {
      this.renderer.setStyle(host, 'position', 'relative');
    }
  }

  getCssValue(value?: string | number): string | null {
    if (value == null) return null;
    return typeof value === 'number' ? `${value}px` : value;
  }
}
