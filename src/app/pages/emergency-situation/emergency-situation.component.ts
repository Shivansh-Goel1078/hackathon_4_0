import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-emergency-situation',
  standalone: true,
  templateUrl: './emergency-situation.component.html',
  imports:[GoogleMapsModule],
  styleUrls: ['./emergency-situation.component.css']
})
export class EmergencySituationComponent implements AfterViewInit {
  center: google.maps.LatLngLiteral = { lat: 31.51679331043587, lng: 74.35149289364826 }; // Initial center coordinates
  zoom = 16; // Initial zoom level
  
  lat: number = 31.51679331043587; // Latitude
  lng: number = 74.35149289364826; // Longitude
  
ngAfterViewInit(): void {
  const cords = localStorage.getItem("cp")
  navigator.geolocation.getCurrentPosition(
    (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coords = "latitude" + latitude + "longitude" + longitude
        localStorage.setItem(JSON.stringify(coords),"cp")
        alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
        this.lat = latitude
        this.lng = longitude;
        

    }
  )
}
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      console.log(event.latLng.toJSON()); // Log latitude and longitude on click
    }
  }
}
