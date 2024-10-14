import { Component } from '@angular/core';

@Component({
  selector: 'app-emergency-button',
  templateUrl: './emergency-button.component.html',
  styleUrls: ['./emergency-button.component.css']
})
export class EmergencyButtonComponent {
 public onEmergencySituation(){
  navigator.geolocation.getCurrentPosition(
    (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => {
        console.error("Error getting user location:", error);
    }
);
 }
}
