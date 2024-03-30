import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  shadeList = [
    { colorCode: 'L123', colorName: 'Red', hexCode: '#d34d29' },
    { colorCode: 'L124', colorName: 'Orange', hexCode: '#eaa245' },
  ];
  shadeForm = new FormGroup({
    color: new FormControl(''),
  });

  ngOnInit(): void {
    this.shadeForm.valueChanges.subscribe((resp) => {
      console.log(resp);
    });
  }
}
