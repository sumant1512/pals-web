import { Component } from '@angular/core';
import { QrCreateForm } from './qr-create.form';
import { QrService } from '../services/qr.service';

@Component({
  selector: 'app-qr-create-form',
  templateUrl: './qr-create-form.component.html',
  styleUrls: ['./qr-create-form.component.scss'],
})
export class QrCreateFormComponent {
  createQrForm = QrCreateForm();

  constructor(private qrService: QrService) {}

  onSubmit() {
    if (this.createQrForm.valid) {
      console.log(this.createQrForm.value);
      this.qrService.createQr(this.createQrForm.value).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
