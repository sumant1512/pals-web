import { Component } from '@angular/core';

export interface Product {
  description: string;
  size: string;
  rate: number;
  qty: number;
}

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss'],
})
export class EstimateComponent {
  qrCodeUrl = './../../assets/qr-code.png';
  discountPercent: number = 0;
  grandTotal = 0;
  discountAmount = 0;
  estimateInfo = {
    name: '',
    address: '',
    date: new Date().toISOString().substring(0, 10), // default today
    number: '',
  };

  products: Product[] = [
    {
      description: 'Sourya Cem White Lime Wash',
      size: '25 KG.',
      rate: 350,
      qty: 0,
    },
    {
      description: 'Sourya Cem Blue Lime Wash',
      size: '25 KG.',
      rate: 370,
      qty: 1,
    },
    { description: 'Pals Distemper Bag', size: '20 KG.', rate: 400, qty: 10 },
    { description: 'Pals Distemper Bag', size: '10 KG.', rate: 240, qty: 3 },
    { description: 'Pals Distemper Bag', size: '5 KG.', rate: 145, qty: 1 },
    { description: 'Pals Distemper Bucket', size: '20 KG.', rate: 950, qty: 1 },
    { description: 'Pals Distemper Bucket', size: '10 KG.', rate: 570, qty: 1 },
    { description: 'Pals Distemper Bucket', size: '5 KG.', rate: 345, qty: 1 },
    {
      description: 'Pals Wall Primer Interior',
      size: '20 LTR.',
      rate: 1650,
      qty: 10,
    },
    {
      description: 'Pals Wall Primer Interior',
      size: '10 LTR.',
      rate: 1000,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Interior',
      size: '4 LTR.',
      rate: 480,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Interior',
      size: '1 LTR.',
      rate: 170,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '20 LTR.',
      rate: 1940,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '10 LTR.',
      rate: 1150,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '4 LTR.',
      rate: 615,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '1 LTR.',
      rate: 210,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '20 LTR.',
      rate: 2140,
      qty: 10,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '10 LTR.',
      rate: 1300,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '4 LTR.',
      rate: 645,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '1 LTR.',
      rate: 255,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '20 LTR.',
      rate: 2570,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '10 LTR.',
      rate: 1410,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '4 LTR.',
      rate: 695,
      qty: 2,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '1 LTR.',
      rate: 295,
      qty: 1,
    },
    {
      description: 'Pals Wall Putty (Powder)',
      size: '40 KG.',
      rate: 700,
      qty: 3,
    },
  ];

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

  getGrandTotal(): void {
    this.grandTotal = this.getSubtotal() - this.getDiscountAmount();
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
            .header {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin-bottom: 10px;
            }
            .header .left {
              flex: 1;
            }
            .header .right {
              flex-shrink: 0;
              text-align: right;
            }
            .header h2 {
              margin: 0 0 4px 0;
              font-size: 16px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              font-size: 10px;
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
                <h2>Pals Paint</h2>
                <div>GSTIN: 23AAOCP1744R1ZT</div>
                <div>Address: 122/1 SR Compound Lasudiya More, Dewas Naka, Indore, 453771</div>
                <div>Contact: +91 - 9131410942</div>
                <br>
                <div><strong>Estimate for:</strong> ${this.estimateInfo.name}</div>
                <div><strong>Address:</strong> ${this.estimateInfo.address}</div>
                <div><strong>Date:</strong> ${this.estimateInfo.date}</div>
                <div><strong>Est. No.:</strong> ${this.estimateInfo.number}</div>
              </div>
              <div class="right">
                <img src="${this.qrCodeUrl}" alt="QR Code" style="width: 100px; height: 100px;" />
              </div>
            </div>
  
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

  ngOnInit() {
    this.getGrandTotal();
  }
}
