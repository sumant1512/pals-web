import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ColorShades } from '../product/shade.helper';
import { IPacket } from '../products.interface';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shade-dialog',
  templateUrl: './shade-dialog.component.html',
  styleUrls: ['./shade-dialog.component.scss'],
})
export class ShadeDialogComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  colorShadesList!: any;
  shadeForm = new FormGroup({
    color: new FormControl(''),
  });

  @Input() selectedPacket!: IPacket;
  @Output() addShade = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  shadeList: ColorShades[] = [];
  themeColors: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getShades();
  }

  getShades(): void {
    this.subscription.add(
      this.productsService.fetchShades().subscribe((resp) => {
        this.colorShadesList = resp;
      })
    );
  }

  add(): void {
    this.addShade.emit(this.shadeForm.value.color || '#FFFFFF');
  }

  generateShadeCard(): void {
    this.subscription.add(
      this.productsService
        .generateFanDeck(this.colorShadesList)
        .subscribe((resp) => {
          console.log(resp);
        })
    );
  }

  closeModal() {
    this.close.emit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
