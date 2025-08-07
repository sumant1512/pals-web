import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerTrasactionComponent } from './dealer-trasaction.component';

describe('DealerTrasactionComponent', () => {
  let component: DealerTrasactionComponent;
  let fixture: ComponentFixture<DealerTrasactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealerTrasactionComponent]
    });
    fixture = TestBed.createComponent(DealerTrasactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
