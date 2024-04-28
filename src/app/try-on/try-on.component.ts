import { Component } from '@angular/core';

@Component({
  selector: 'app-try-on',
  templateUrl: './try-on.component.html',
  styleUrls: ['./try-on.component.scss'],
})
export class TryOnComponent {
  isFillColorActive = false;
  fillingColor = '#f3f2ef';
  lines: any[] = [];
  lineInProgress: any = null;
  shapes: any[] = [
    {
      points: '152,125 152,206 344,200 344,125',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 0,
    },
    {
      points: '418,125 418,194 529,198 527,125',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 1,
    },
    {
      points: '524,125 525,185 557,184 558,125',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 6,
    },
    {
      points: '345,140 344,191 417,195 417,138',
      fill: 'rgb(79,73,61)',
      stroke: 'rgb(79,73,61)',
      strokeWidth: '2',
      id: 2,
    },
    {
      points: '153,223 153,189 892,182 894,207',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 3,
    },
    {
      points: '516,216 516,236 894,230 893,208',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 4,
    },
    {
      points: '858,125 863,230 894,230 892,125',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 5,
    },
    {
      points: '863,230 801,266 553,270 534,237',
      fill: 'rgb(79,73,61)',
      stroke: 'rgb(79,73,61)',
      strokeWidth: '2',
      id: 7,
    },
    {
      points: '537,269 564,269 564,497 539,497',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 8,
    },
    {
      points: '800,267 806,492 854,494 844,267',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 10,
    },
    {
      points: '537,237 537,268 564,268 537,237',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 9,
    },
    {
      points: '800,267 844,267 844,242 817,258',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 11,
    },
    {
      points: '228,222 229,521 513,513 516,216',
      fill: 'rgb(79,73,61)',
      stroke: 'rgb(79,73,61)',
      strokeWidth: '2',
      id: 16,
    },
    {
      points: '359,240 359,280 425,280 425,240',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 12,
    },
    {
      points: '369,250 369,271 415,271 415,250',
      fill: 'black',
      stroke: 'black',
      strokeWidth: '2',
      id: 13,
    },
    {
      points: '317,340 317,462 459,462 459,340',
      fill: 'rgb(77, 70, 62)',
      stroke: 'rgb(77, 70, 62)',
      strokeWidth: '2',
      id: 14,
    },
    {
      points: '332,355 332,447 444,447 444,355',
      fill: 'black',
      stroke: 'black',
      strokeWidth: '2',
      id: 15,
    },
    {
      points: '512,237 510,513 540,512 537,237',
      fill: 'rgb(79,73,61)',
      stroke: 'rgb(79,73,61)',
      strokeWidth: '2',
      id: 17,
    },
  ];
  backgroundImageUrl: string = './../../../assets/house1.jpg';

  constructor() {}

  onTouchStart(event: TouchEvent): void {
    if (this.isFillColorActive) return;
    const x1 = event.targetTouches[0].clientX - 20;
    const y1 = event.targetTouches[0].clientY - 85;
    console.log(x1, y1);
    console.log(event);

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
      this.lineInProgress.x2 = event.targetTouches[0].clientX - 20;
      this.lineInProgress.y2 = event.targetTouches[0].clientY - 85;
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
    console.log(event);
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
    console.log(id);
    if (this.isFillColorActive) {
      this.shapes[parseInt(id)].fill = this.fillingColor;
      this.shapes[parseInt(id)].stroke = this.fillingColor;
    }
  }

  createShapeSvg(): void {
    const [line1, line2, line3, line4] = this.lines;

    const shape = {
      points: `${(line1 as any).x1},${(line1 as any).y1} ${(line2 as any).x1},${
        (line2 as any).y1
      } ${(line3 as any).x1},${(line3 as any).y1} ${(line4 as any).x1},${
        (line4 as any).y1
      }`,
      fill: 'blue',
      stroke: 'yellow',
      strokeWidth: '2',
      id: this.shapes.length,
    };

    console.log(shape);

    this.shapes.push(shape);
    this.lines = [];
  }
}
