import { Component } from '@angular/core';

@Component({
  selector: 'app-try-on-dialog-svg',
  templateUrl: './try-on-dialog-svg.component.html',
  styleUrls: ['./try-on-dialog-svg.component.scss'],
})
export class TryOnDialogSvgComponent {
  isFillColorActive = false;
  fillingColor = '#f3f2ef';
  lines: any[] = [];
  lineInProgress: any = null;
  shapes: any[] = [];
  backgroundImageUrl: string = './../../../assets/house.jpeg';

  constructor() {}

  onTouchStart(event: TouchEvent): void {
    if (this.isFillColorActive) return;
    const x1 = event.targetTouches[0].clientX;
    const y1 = event.targetTouches[0].clientY;

    this.lineInProgress = {
      x1: x1,
      y1: y1,
      x2: x1,
      y2: y1,
    };
  }

  onTouchMove(event: TouchEvent): void {
    if (this.isFillColorActive) return;
    if (this.lineInProgress) {
      this.lineInProgress.x2 = event.targetTouches[0].clientX;
      this.lineInProgress.y2 = event.targetTouches[0].clientY;
    }
  }

  onTouchEnd(): void {
    if (this.isFillColorActive) return;
    if (this.lineInProgress) {
      this.lines.push(this.lineInProgress);

      if (this.lines.length === 4) {
        this.createShapeSvg();
      }
      this.lineInProgress = null;
    }
  }

  onMouseDown(event: MouseEvent): void {
    if (this.isFillColorActive) return;
    const x1 = event.offsetX;
    const y1 = event.offsetY;

    this.lineInProgress = {
      x1: x1,
      y1: y1,
      x2: x1,
      y2: y1,
    };
  }

  onMouseMove(event: MouseEvent): void {
    if (this.isFillColorActive) return;
    if (this.lineInProgress) {
      this.lineInProgress.x2 = event.offsetX;
      this.lineInProgress.y2 = event.offsetY;
    }
  }

  onMouseUp(): void {
    if (this.isFillColorActive) return;
    if (this.lineInProgress) {
      this.lines.push(this.lineInProgress);

      if (this.lines.length === 4) {
        this.createShapeSvg();
      }
      this.lineInProgress = null;
    }
  }

  handleImageUpload(event: Event): void {
    const file = (event.target as any).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.backgroundImageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  activateFillColor(): void {
    this.isFillColorActive = !this.isFillColorActive;
  }

  clearCanvas(): void {
    this.shapes = [];
    this.lines = [];
  }

  onShadeSelect(selectedShade: string): void {
    this.fillingColor = selectedShade;
  }

  fillColor(id: string): void {
    if (this.isFillColorActive) {
      this.shapes[parseInt(id)].fill = this.fillingColor;
    }
  }

  createShapeSvg(): void {
    const [line1, line2, line3, line4] = this.lines;

    this.shapes.push({
      points: `${(line1 as any).x1},${(line1 as any).y1} ${(line2 as any).x1},${
        (line2 as any).y1
      } ${(line3 as any).x1},${(line3 as any).y1} ${(line4 as any).x1},${
        (line4 as any).y1
      }`,
      fill: 'blue',
      stroke: 'yellow',
      strokeWidth: '2',
      id: this.shapes.length,
    });
    this.lines = [];
  }
}
