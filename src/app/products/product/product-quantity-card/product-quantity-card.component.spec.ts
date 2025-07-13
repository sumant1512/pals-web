import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityCardComponent } from './product-quantity-card.component';

describe('ProductQuantityCardComponent', () => {
  let component: ProductQuantityCardComponent;
  let fixture: ComponentFixture<ProductQuantityCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductQuantityCardComponent]
    });
    fixture = TestBed.createComponent(ProductQuantityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
