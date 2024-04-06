import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeDialogComponent } from './shade-dialog.component';

describe('ShadeDialogComponent', () => {
  let component: ShadeDialogComponent;
  let fixture: ComponentFixture<ShadeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShadeDialogComponent]
    });
    fixture = TestBed.createComponent(ShadeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
