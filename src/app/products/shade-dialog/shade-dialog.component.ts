import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ColorShades } from '../product/shade.helper';
import { IPacket } from '../products.interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shade-dialog',
  templateUrl: './shade-dialog.component.html',
  styleUrls: ['./shade-dialog.component.scss'],
})
export class ShadeDialogComponent implements OnInit {
  colorShadesList!: any;
  shadeForm = new FormGroup({
    color: new FormControl(''),
  });

  @Input() selectedPacket!: IPacket;
  @Output() addShade = new EventEmitter<string>();

  shadeList: ColorShades[] = [];
  themeColors: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getShades();
  }

  getShades(): void {
    this.productsService.fetchShades().subscribe((resp) => {
      this.colorShadesList = resp;
    });
  }

  add(): void {
    this.addShade.emit(this.shadeForm.value.color || '#FFFFFF');
  }
}
