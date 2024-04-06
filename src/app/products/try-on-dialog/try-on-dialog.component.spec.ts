import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryOnDialogComponent } from './try-on-dialog.component';

describe('TryOnDialogComponent', () => {
  let component: TryOnDialogComponent;
  let fixture: ComponentFixture<TryOnDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryOnDialogComponent]
    });
    fixture = TestBed.createComponent(TryOnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
