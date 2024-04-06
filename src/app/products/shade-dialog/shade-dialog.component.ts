import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COLOIR_PALLETE } from '../products.const';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ColorShades,
  getShadesFormHex,
  getThemeColorShades,
} from '../product/shade.helper';
import { IPacket } from '../products.interface';

@Component({
  selector: 'app-shade-dialog',
  templateUrl: './shade-dialog.component.html',
  styleUrls: ['./shade-dialog.component.scss'],
})
export class ShadeDialogComponent implements OnInit {
  colorPallete = COLOIR_PALLETE;
  colorFC = new FormControl<string>('#006BD8');
  shadeForm = new FormGroup({
    color: new FormControl(''),
  });

  @Input() selectedPacket!: IPacket;
  @Output() addShade = new EventEmitter<string>();

  shadeList: ColorShades[] = [];
  themeColors: any;

  ngOnInit(): void {
    this.createShade();
  }

  selectColorPallete(color: string): void {
    this.colorFC.setValue(color);
    this.createShade();
  }

  add(): void {
    // this.selectedPacketList.push({
    //   ...this.selectedPacket,
    //   productId: this.productDetails.id,
    //   soldPrice: this.getDiscountedPrice(this.selectedPacket),
    //   color: this.shadeForm.value.color || '#FFFFFF',
    // });
    this.addShade.emit(this.shadeForm.value.color || '#FFFFFF');
  }

  private createShade(): void {
    this.shadeList = getShadesFormHex(this.colorFC.value as string);
    this.themeColors = getThemeColorShades(this.shadeList);
  }
}
