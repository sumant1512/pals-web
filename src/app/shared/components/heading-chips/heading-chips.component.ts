import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-chips',
  templateUrl: './heading-chips.component.html',
  styleUrls: ['./heading-chips.component.scss'],
})
export class HeadingChipsComponent {
  @Input() label!: string;
}
