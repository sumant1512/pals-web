import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingChipsComponent } from './heading-chips.component';

describe('HeadingChipsComponent', () => {
  let component: HeadingChipsComponent;
  let fixture: ComponentFixture<HeadingChipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadingChipsComponent]
    });
    fixture = TestBed.createComponent(HeadingChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
