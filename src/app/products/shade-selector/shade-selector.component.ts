import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ColorShades,
  getShadesFormHex,
  getThemeColorShades,
} from '../product/shade.helper';
import { COLOIR_PALLETE } from '../products.const';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shade-selector',
  templateUrl: './shade-selector.component.html',
  styleUrls: ['./shade-selector.component.scss'],
})
export class ShadeSelectorComponent implements OnInit {
  @Output() onShadeSelect = new EventEmitter<string>();
  protected colorPallete = COLOIR_PALLETE;
  selectedShade!: string;

  protected shadeList: ColorShades[] = [];
  protected themeColors: any;

  ngOnInit(): void {
    this.createShade(this.colorPallete[0]);
  }

  selectColorPallete(color: string): void {
    this.createShade(color);
  }

  selectColor(color: string): void {
    this.selectedShade = color;
    this.onShadeSelect.emit(this.selectedShade);
  }

  private createShade(palleteColor: string): void {
    this.shadeList = getShadesFormHex(palleteColor);
    this.themeColors = getThemeColorShades(this.shadeList);
  }
}
