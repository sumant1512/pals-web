import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorShades } from '../../../products/product/shade.helper';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shade-selector',
  templateUrl: './shade-selector.component.html',
  styleUrls: ['./shade-selector.component.scss'],
})
export class ShadeSelectorComponent implements OnInit {
  @Output() onShadeSelect = new EventEmitter<string>();
  selectedShade!: string;

  colorShadesList = [] as any;

  ngOnInit(): void {}

  selectColor(color: string): void {
    this.selectedShade = color;
    this.onShadeSelect.emit(this.selectedShade);
  }
}
