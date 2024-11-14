import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  selectedService: string | null = null;
  constructor(private route: Router){}

  // Method to select a service
  selectService(service: string) {
    this.selectedService = service;
    switch (this.selectedService) {
      case 'Book Ambulance':
          // Logic for booking an ambulance
          console.log('Ambulance booking initiated.');
          this.route.navigate(['emergency'])
          // You can add more functionality here, like navigating to a booking page
          break;

      case 'Book Appointment':
          // Logic for booking an appointment
          console.log('Appointment booking initiated.');
          this.route.navigate(['book-appointment'])
          // Add functionality for scheduling an appointment
          break;

      case 'Order Medicine':
          // Logic for ordering medicine
          console.log('Medicine ordering initiated.');
          // Implement the ordering process here
          this.route.navigate(['order-medicine'])
          break;

      default:
          console.log('Invalid service selected.');
          // Handle any unexpected cases
          break;
  }
    // Add your logic here, e.g., navigate to a specific page or show more info
  }
}
