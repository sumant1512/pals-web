import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { fromEvent, pairwise, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-try-on-dialog',
  templateUrl: './try-on-dialog.component.html',
  styleUrls: ['./try-on-dialog.component.scss'],
})
export class TryOnDialogComponent implements AfterViewInit {
  @ViewChild('canvas') public canvas!: ElementRef;

  @Input() public width = 400;
  @Input() public height = 400;

  image = new Image();

  private cx!: CanvasRenderingContext2D;

  public ngAfterViewInit() {
    this.image.src = './../../../assets/house.jpeg';
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d') as any;

    this.cx.fillRect(20, 20, 150, 100);

    this.image.onload = () => {
      console.log('image has loaded!');
      this.cx.drawImage(this.image, 0, 0);
    };

    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineCap = 'round';
    this.cx.lineWidth = 30;
    this.cx.strokeStyle = 'red';

    this.captureEvents(canvasEl);
  }

  clearCanvas(): void {
    this.cx.clearRect(0, 0, this.width, this.height);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          return fromEvent(canvasEl, 'mousemove').pipe(
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            pairwise() /* Return the previous and last values as array */
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
    if (!this.cx) {
      return;
    }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }
}
