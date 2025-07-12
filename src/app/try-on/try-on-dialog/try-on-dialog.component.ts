import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, pairwise, switchMap, takeUntil } from 'rxjs';

export interface Lines {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}
export interface Shape {
  shape: Array<Lines>;
}

@Component({
  selector: 'app-try-on-dialog',
  templateUrl: './try-on-dialog.component.html',
  styleUrls: ['./try-on-dialog.component.scss'],
})
export class TryOnDialogComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('canvas') public canvas!: ElementRef;

  width = 400;
  height = 400;
  fillingColor = '#f3f2ef';
  backgroundImage = new Image();
  isDrawing: boolean = false;
  isFillColorActive = false;

  context!: CanvasRenderingContext2D;
  startX!: number;
  startY!: number;
  endX!: number;
  endY!: number;
  lines: Array<Lines> = [];
  shapes: Array<Shape> = [];

  public ngAfterViewInit() {
    this.backgroundImage.src = 'house.jpeg';
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.context = canvasEl.getContext('2d') as any;

    this.context.fillRect(20, 20, 150, 100);

    this.backgroundImage.onload = () => {
      this.drawBackgroundImage();
      this.redrawLines();
    };

    canvasEl.width = this.width;
    canvasEl.height = this.height;
  }

  onShadeSelect(selectedShade: string): void {
    this.fillingColor = selectedShade;
  }

  onTouchStart(event: TouchEvent) {
    if (this.isFillColorActive) return;
    this.isDrawing = true;
    this.startX = event.targetTouches[0].clientX;
    this.startY = event.targetTouches[0].clientY;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDrawing || this.isFillColorActive) return;
    this.endX = event.targetTouches[0].clientX;
    this.endY = event.targetTouches[0].clientY;
    this.redrawLines();
    this.context.beginPath();
    this.context.moveTo(this.startX, this.startY);
    this.context.lineTo(this.endX, this.endY);
    this.context.stroke();
  }

  onTouchEnd(event: TouchEvent) {
    if (this.isFillColorActive) return;
    if (this.isDrawing) {
      this.lines.push({
        startX: this.startX,
        startY: this.startY,
        endX: this.endX,
        endY: this.endY,
      });
      this.isDrawing = false;
    }
    if (this.lines.length === 4) {
      this.shapes.push({ shape: this.lines });
      this.drawBackgroundImage();
      this.drawShape(this.shapes);
      this.lines = [];
    }
  }

  onMouseDown(event: MouseEvent): void {
    if (this.isFillColorActive) return;
    this.isDrawing = true;
    this.startX = event.offsetX;
    this.startY = event.offsetY;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDrawing || this.isFillColorActive) return;
    this.endX = event.offsetX;
    this.endY = event.offsetY;
    this.redrawLines();
    this.context.beginPath();
    this.context.moveTo(this.startX, this.startY);
    this.context.lineTo(this.endX, this.endY);
    this.context.stroke();
  }

  onMouseUp(event: MouseEvent): void {
    if (this.isFillColorActive) return;
    if (this.isDrawing) {
      this.lines.push({
        startX: this.startX,
        startY: this.startY,
        endX: this.endX,
        endY: this.endY,
      });
      this.isDrawing = false;
    }
    if (this.lines.length === 4) {
      this.shapes.push({ shape: this.lines });
      this.drawBackgroundImage();
      this.drawShape(this.shapes);
      this.lines = [];
    }
  }

  redrawLines(): void {
    this.drawBackgroundImage();
    this.drawShape(this.shapes);
    this.lines.forEach((line) => {
      this.context.beginPath();
      this.context.moveTo(line.startX, line.startY);
      this.context.lineTo(line.endX, line.endY);
      this.context.stroke();
    });
  }

  handleImageUpload(event: Event) {
    const file = (event.target as any).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.drawBackgroundImage();
      this.backgroundImage.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  drawBackgroundImage(): void {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.drawImage(this.backgroundImage, 0, 0, this.width, this.height);
  }

  drawShape(shapes: Array<Shape>): void {
    this.context.beginPath();
    shapes.forEach((element) => {
      element.shape.forEach((line, i) => {
        if (i > 0) {
          element.shape[i].startX = element.shape[i - 1].endX;
          element.shape[i].startY = element.shape[i - 1].endY;
        }
        if (i === element.shape.length - 1) {
          element.shape[element.shape.length - 1].endX =
            element.shape[0].startX;
          element.shape[element.shape.length - 1].endY =
            element.shape[0].startY;
        }
        this.context.moveTo(line.startX, line.startY);
        this.context.lineTo(line.endX, line.endY);
      });
    });
    this.context.closePath();
    this.context.stroke();
  }

  fillShape(x: number, y: number): void {
    this.shapes.forEach((item) => {
      item.shape.forEach((shape) => {
        if (
          x >= shape.startX &&
          x <= shape.endX &&
          y >= shape.startY &&
          y <= shape.endY
        ) {
          console.log(x, y);
          this.context.fillStyle = this.fillingColor;
          this.context.beginPath();
          this.context.moveTo(shape.startX, shape.startY);
          this.context.lineTo(shape.endX, shape.endY);
          this.context.lineTo(shape.endX, shape.startY);
          this.context.lineTo(shape.startX, shape.endY);
          this.context.closePath();
          this.context.fill();
        }
      });
    });
  }

  fillSelectedShape(event: MouseEvent): void {
    if (!this.isFillColorActive) return;

    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    this.fillShape(x, y);
  }

  activateFillColor(): void {
    this.isFillColorActive = !this.isFillColorActive;
  }

  clearCanvas(): void {
    this.context.clearRect(0, 0, this.width, this.height);
    this.shapes = [];
    this.lines = [];
    this.drawBackgroundImage();
  }
}
