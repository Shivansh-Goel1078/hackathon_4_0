import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-emergency-situation',
  standalone: true,
  templateUrl: './emergency-situation.component.html',
  imports:[GoogleMapsModule],
  styleUrls: ['./emergency-situation.component.css']
})
export class EmergencySituationComponent {
  center: google.maps.LatLngLiteral = { lat: 40.730610, lng: -73.935242 }; // Example coordinates
  zoom = 12;
  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };
}
