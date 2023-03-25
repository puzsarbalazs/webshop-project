import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulPurchaseComponent } from './successful-purchase.component';

describe('SuccessfullPurchaseComponent', () => {
  let component: SuccessfulPurchaseComponent;
  let fixture: ComponentFixture<SuccessfulPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
