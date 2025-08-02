import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDealersComponent } from './view-dealers.component';

describe('ViewDealersComponent', () => {
  let component: ViewDealersComponent;
  let fixture: ComponentFixture<ViewDealersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDealersComponent]
    });
    fixture = TestBed.createComponent(ViewDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
