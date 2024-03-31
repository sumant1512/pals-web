import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  shadeList = [
    {
      colorCode: '8108',
      colorName: 'Button Rose',
      hexCode: 'rgb(242, 228, 223)',
    },
    {
      colorCode: '5182',
      colorName: 'Lucid Dream',
      hexCode: '#E7D3D3',
    },
    {
      colorCode: '9607',
      colorName: 'Purple Galaxy-N',
      hexCode: 'rgb(101, 71, 99)',
    },
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
