import { Component, OnInit } from '@angular/core';
import { Product, SHOP_PRODUCT_LIST } from './shop-products.const';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss'],
})
export class EstimateComponent implements OnInit {
  qrCodeUrl = 'qr-code.png';
  discountPercent: number = 0;
  discountAmount = 0;
  transportCharges = 0;
  estimateInfo = {
    name: '',
    address: '',
    date: new Date().toISOString().substring(0, 10),
    number: '',
    contact: '',
    estimateType: 'Estimate',
    isTransportIncluded: 'false',
  };

  products = SHOP_PRODUCT_LIST;

  getPackSizeNumeric(size: string): number {
    const num = parseFloat(size);
    return isNaN(num) ? 0 : num;
  }

  getWeight(product: Product): number {
    return this.getPackSizeNumeric(product.size) * product.qty;
  }

  getTotal(product: Product): number {
    return product.qty * product.rate;
  }

  getSubtotal(): number {
    return this.products.reduce((sum, p) => sum + this.getTotal(p), 0);
  }

  getDiscountAmount(): number {
    this.discountAmount = this.getSubtotal() * (this.discountPercent / 100);
    return this.discountAmount;
  }

  getGrandTotal(): number {
    return (
      this.getSubtotal() - this.getDiscountAmount() + this.transportCharges
    );
  }

  openPreview() {
    const container = document.querySelector('.estimate-container');
    if (!container) return;

    const clone = container.cloneNode(true) as HTMLElement;

    // Remove header in cloned container to avoid duplication
    const headerInClone = clone.querySelector('.invoice-header');
    if (headerInClone) {
      headerInClone.remove();
    }

    // Remove preview button section (no-print)
    const noPrintSection = clone.querySelector('.no-print');
    if (noPrintSection) {
      noPrintSection.remove();
    }

    // Replace inputs with plain text
    const inputs = clone.querySelectorAll('input');
    inputs.forEach((input) => {
      const span = document.createElement('span');
      span.textContent = input.value;
      input.parentNode?.replaceChild(span, input);
    });

    const printContents = clone.innerHTML;

    const popupWin = window.open('', '_blank', 'width=800,height=600');
    popupWin!.document.open();

    popupWin!.document.write(`
      <html>
        <head>
          <title>Invoice Preview</title>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body, html {
              margin: 0;
              padding: 10px;
              font-family: Arial, sans-serif;
              font-size: 10px;
            }
            .wrapper {
              padding: 20px;
              box-sizing: border-box;
              height: 100vh;
            }
            .estimate{
              text-align: center;
            }
            .header {
              display: flex;
              justify-content: space-between;
              align-items: end;
              margin-bottom: 20px;
            }
            .header .left {
              flex: 1;
              div {
                font-size: 14px;
              }
            }
            .header .right {
              flex-shrink: 0;
              text-align: right;
              .estimate {
                font-size: 14px;
                padding-right: 7px;
              }
            }
            .header h1 {
              font-size: 24px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              font-size: 12px;
            }
            th, td {
              border: 1px solid #000;
              padding: 4px 6px;
              text-align: left;
              white-space: nowrap;
            }
            thead th {
              background-color: #f0f0f0;
            }
            tfoot td {
              font-weight: bold;
            }
            tr, td, th {
              page-break-inside: avoid;
            }
            @media print {
              body {
                margin: 0;
              }
              .wrapper {
                padding: 20px;
                height: auto;
              }
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <div class="left">
                <h1>Pals Paint</h1>
                <div><strong>GSTIN:</strong> 23AAOCP1744R1ZT</div>
                <div><strong>Address:</strong> 122/1, SR Compound Rd, near Dewas Naka, Lasudia Mori, <br>Indore, Madhya Pradesh 453771</div>
                <div><strong>Contact:</strong> +91 - 9131410942</div>
                <br>
                <div><strong>Estimate for:</strong> ${this.estimateInfo.name}</div>
                <div><strong>Contact:</strong> ${this.estimateInfo.contact}</div>
                <div><strong>Address:</strong> ${this.estimateInfo.address}</div>
                <div><strong>Date:</strong> ${this.estimateInfo.date}</div>
              </div>
              <div class="right">
                <img src="${this.qrCodeUrl}" alt="QR Code" style="width: 134px; height: 134px;" />
                <div class="estimate"><strong>${this.estimateInfo.estimateType} No.:</strong> ${this.estimateInfo.number}</div>
              </div>
            </div>
            <div class="estimate"><h2>${this.estimateInfo.estimateType}</h2></div>
            ${printContents}
          </div>
  
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              }
            }
          </script>
        </body>
      </html>
    `);

    popupWin!.document.close();
  }

  ngOnInit() {}
}
