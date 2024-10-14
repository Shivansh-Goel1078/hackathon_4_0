import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyButtonComponent } from './emergency-button.component';

describe('EmergencyButtonComponent', () => {
  let component: EmergencyButtonComponent;
  let fixture: ComponentFixture<EmergencyButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyButtonComponent]
    });
    fixture = TestBed.createComponent(EmergencyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
