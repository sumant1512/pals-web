import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, pairwise, switchMap, takeUntil } from 'rxjs';

export interface Shape {
  type: string;
  x: number;
  y: number;
  w: number;
  h: number;
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
  lines: { startX: number; startY: number; endX: number; endY: number }[] = [];

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

    // this.cx.lineCap = 'round';
    // this.cx.lineWidth = 30;
    // this.cx.strokeStyle = 'red';

    // this.captureEvents(canvasEl);
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
  }

  clearCanvas(): void {
    this.context.clearRect(0, 0, this.width, this.height);
    this.drawBackgroundImage();
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

  private captureEvents(canvasEl: HTMLCanvasElement) {
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          return fromEvent(canvasEl, 'mousemove').pipe(
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            pairwise()
          );
        })
      )
      .subscribe(([mouseEvent, mouseEvent1]) => {
        const rect = canvasEl.getBoundingClientRect();

        const prevPos = {
          x: (mouseEvent as MouseEvent).clientX - rect.left,
          y: (mouseEvent as MouseEvent).clientY - rect.top,
        };

        const currentPos = {
          x: (mouseEvent1 as MouseEvent).clientX - rect.left,
          y: (mouseEvent1 as MouseEvent).clientY - rect.top,
        };

        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    if (!this.context) {
      return;
    }

    this.context.beginPath();

    if (prevPos) {
      this.context.moveTo(prevPos.x, prevPos.y);
      this.context.lineTo(currentPos.x, currentPos.y);
      this.context.stroke();
    }
  }
}
