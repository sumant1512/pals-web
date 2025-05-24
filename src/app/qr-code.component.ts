import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent implements AfterViewInit {
  @ViewChild('qrcodeCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  readonly websiteURL = 'https://www.palspaint.com/'; // Website URL for the QR code
  readonly logoPath = './../assets/barcode_logo_large.png'; // Path to your local logo image

  ngAfterViewInit() {
    this.generateQRCode();
  }

  async generateQRCode() {
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Increase resolution by scaling up the canvas
    const canvasSize = 600; // Adjust for higher resolution (e.g., 600x600 pixels)
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    // Generate QR Code
    await QRCode.toCanvas(canvas, this.websiteURL, {
      width: canvasSize,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    });

    // Add Logo
    const logo = new Image();
    logo.src = this.logoPath;
    logo.onload = () => {
      const logoSize = 60; // Size of the logo
      const centerX = canvas.width / 2 - logoSize / 2;
      const centerY = canvas.height / 2 - logoSize / 2;

      // Clear the center area for better visibility
      context.clearRect(centerX, centerY, logoSize, logoSize);

      // Draw the logo in the center
      context.drawImage(logo, centerX, centerY, logoSize, logoSize);
    };
  }
}
