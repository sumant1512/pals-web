import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCreateFormComponent } from './qr-create-form.component';

describe('QrCreateFormComponent', () => {
  let component: QrCreateFormComponent;
  let fixture: ComponentFixture<QrCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrCreateFormComponent]
    });
    fixture = TestBed.createComponent(QrCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
