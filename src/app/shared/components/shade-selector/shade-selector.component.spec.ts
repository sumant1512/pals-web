import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeSelectorComponent } from './shade-selector.component';

describe('ShadeSelectorComponent', () => {
  let component: ShadeSelectorComponent;
  let fixture: ComponentFixture<ShadeSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShadeSelectorComponent]
    });
    fixture = TestBed.createComponent(ShadeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
