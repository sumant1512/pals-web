import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCreditRequestComponent } from './dealer-credit-request.component';

describe('DealerCreditRequestComponent', () => {
  let component: DealerCreditRequestComponent;
  let fixture: ComponentFixture<DealerCreditRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealerCreditRequestComponent]
    });
    fixture = TestBed.createComponent(DealerCreditRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
