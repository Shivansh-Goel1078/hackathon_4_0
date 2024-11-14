import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMedicineComponent } from './order-medicine.component';

describe('OrderMedicineComponent', () => {
  let component: OrderMedicineComponent;
  let fixture: ComponentFixture<OrderMedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderMedicineComponent]
    });
    fixture = TestBed.createComponent(OrderMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
