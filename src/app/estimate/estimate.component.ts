import { Component, OnInit } from '@angular/core';

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
export class EstimateComponent implements OnInit {
  qrCodeUrl = './../../assets/qr-code.png';
  discountPercent: number = 0;
  discountAmount = 0;
  transportCharges = 0;
  estimateInfo = {
    name: 'Sumant Mishra',
    address: '122/1 SR Compound',
    date: new Date().toISOString().substring(0, 10), // default today
    number: '1123',
    contact: '',
    estimateType: 'Estimate',
    isTransportIncluded: 'false',
  };

  products: Product[] = [
    {
      description: 'Sourya Cem White Lime Wash',
      size: '25 KG.',
      rate: 280,
      qty: 0,
    },
    {
      description: 'Sourya Cem Blue Lime Wash',
      size: '25 KG.',
      rate: 300,
      qty: 0,
    },
    { description: 'Pals Distemper Bag', size: '20 KG.', rate: 295, qty: 0 },
    { description: 'Pals Distemper Bag', size: '10 KG.', rate: 190, qty: 0 },
    { description: 'Pals Distemper Bag', size: '5 KG.', rate: 95, qty: 0 },
    { description: 'Pals Distemper Bucket', size: '20 KG.', rate: 660, qty: 0 },
    { description: 'Pals Distemper Bucket', size: '10 KG.', rate: 360, qty: 0 },
    { description: 'Pals Distemper Bucket', size: '5 KG.', rate: 215, qty: 0 },
    {
      description: 'Pals Wall Primer Interior',
      size: '20 LTR.',
      rate: 910,
      qty: 0,
    },
    {
      description: 'Pals Wall Primer Interior',
      size: '10 LTR.',
      rate: 490,
      qty: 0,
    },
    {
      description: 'Pals Wall Primer Interior',
      size: '4 LTR.',
      rate: 255,
      qty: 0,
    },
    {
      description: 'Pals Wall Primer Interior',
      size: '1 LTR.',
      rate: 100,
      qty: 0,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '20 LTR.',
      rate: 1145,
      qty: 0,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '10 LTR.',
      rate: 640,
      qty: 0,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '4 LTR.',
      rate: 345,
      qty: 0,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '1 LTR.',
      rate: 135,
      qty: 0,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '20 LTR.',
      rate: 1475,
      qty: 0,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '10 LTR.',
      rate: 780,
      qty: 0,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '4 LTR.',
      rate: 400,
      qty: 0,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '1 LTR.',
      rate: 130,
      qty: 0,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '20 LTR.',
      rate: 1710,
      qty: 0,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '10 LTR.',
      rate: 955,
      qty: 0,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '4 LTR.',
      rate: 485,
      qty: 0,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '1 LTR.',
      rate: 190,
      qty: 0,
    },
    {
      description: 'Pals Wall Putty (Powder)',
      size: '40 KG.',
      rate: 580,
      qty: 0,
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

  getGrandTotal(): number {
    return this.getSubtotal() - this.getDiscountAmount();
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
