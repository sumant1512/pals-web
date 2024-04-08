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
  backgroundImage = new Image();
  isDrawing: boolean = false;

  context!: CanvasRenderingContext2D;
  startX!: number;
  startY!: number;
  lines: Array<Lines> = [];
  shapes: Array<Shape> = [];

  public ngAfterViewInit() {
    this.backgroundImage.src = './../../../assets/house.jpeg';
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

  onMouseDown(event: MouseEvent): void {
    this.isDrawing = true;
    this.startX = event.offsetX;
    this.startY = event.offsetY;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDrawing) return;
    const endX = event.offsetX;
    const endY = event.offsetY;
    this.redrawLines();
    this.context.beginPath();
    this.context.moveTo(this.startX, this.startY);
    this.context.lineTo(endX, endY);
    this.context.stroke();
  }

  onMouseUp(event: MouseEvent): void {
    if (this.isDrawing) {
      const endX = event.offsetX;
      const endY = event.offsetY;
      this.lines.push({
        startX: this.startX,
        startY: this.startY,
        endX: endX,
        endY: endY,
      });
      this.isDrawing = false;
    }
    if (this.lines.length === 4) {
      this.shapes.push({ shape: this.lines });
      this.context.clearRect(0, 0, this.width, this.height);
      this.drawBackgroundImage();
      this.drawShape(this.shapes);
      this.lines = [];
    }
  }

  redrawLines(): void {
    this.context.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
    this.drawBackgroundImage();
    this.lines.forEach((line) => {
      this.context.beginPath();
      this.context.moveTo(line.startX, line.startY);
      this.context.lineTo(line.endX, line.endY);
      this.context.stroke();
    });
  }

  drawBackgroundImage(): void {
    this.context.drawImage(
      this.backgroundImage,
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
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

  fillSelectedShape(event: MouseEvent): void {
    const x = event.offsetX;
    const y = event.offsetY;
    const color = 'blue'; // Set the fill color

    // this.shapes.forEach((shape) => {
    //   if (
    //     shape.type === 'rectangle' &&
    //     x >= shape.x &&
    //     x <= shape.x + (shape.width as number) &&
    //     y >= shape.y &&
    //     y <= shape.y + (shape.height as number)
    //   ) {
    //     this.context.fillStyle = color;
    //     this.context.fillRect(
    //       shape.x,
    //       shape.y,
    //       shape.width as number,
    //       shape.height as number
    //     );
    //   } else if (shape.type === 'circle') {
    //     const dx = x - shape.x;
    //     const dy = y - shape.y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);
    //     if (distance <= (shape.radius as number)) {
    //       this.context.fillStyle = color;
    //       this.context.beginPath();
    //       this.context.arc(
    //         shape.x,
    //         shape.y,
    //         shape.radius as number,
    //         0,
    //         Math.PI * 2
    //       );
    //       this.context.closePath();
    //       this.context.fill();
    //     }
    //   }
    // });
  }

  clearCanvas(): void {
    this.context.clearRect(0, 0, this.width, this.height);
    this.shapes = [];
    this.lines = [];
    this.drawBackgroundImage();
  }
}
