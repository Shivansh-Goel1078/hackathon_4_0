import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencySituationComponent } from './emergency-situation.component';

describe('EmergencySituationComponent', () => {
  let component: EmergencySituationComponent;
  let fixture: ComponentFixture<EmergencySituationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencySituationComponent]
    });
    fixture = TestBed.createComponent(EmergencySituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
