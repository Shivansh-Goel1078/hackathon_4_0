import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSectionComponent } from './booking-section.component';

describe('BookingSectionComponent', () => {
  let component: BookingSectionComponent;
  let fixture: ComponentFixture<BookingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingSectionComponent]
    });
    fixture = TestBed.createComponent(BookingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
