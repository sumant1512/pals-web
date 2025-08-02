import { Component, OnInit } from '@angular/core';
import { QrService } from '../services/qr.service';
import { IQrList } from '../services/qr.interface';

@Component({
  selector: 'app-qr-list',
  templateUrl: './qr-list.component.html',
  styleUrls: ['./qr-list.component.scss'],
})
export class QrListComponent implements OnInit {
  qrList: Array<IQrList> = [];
  constructor(private qrService: QrService) {}

  ngOnInit(): void {
    this.getQrList();
  }

  getQrList(): void {
    this.qrService.getQrList().subscribe((response) => {
      if (response?.status) {
        this.qrList = response.coupons;
      }
    });
  }
}
