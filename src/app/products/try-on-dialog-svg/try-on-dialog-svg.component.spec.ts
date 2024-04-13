import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryOnDialogSvgComponent } from './try-on-dialog-svg.component';

describe('TryOnDialogSvgComponent', () => {
  let component: TryOnDialogSvgComponent;
  let fixture: ComponentFixture<TryOnDialogSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryOnDialogSvgComponent]
    });
    fixture = TestBed.createComponent(TryOnDialogSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
