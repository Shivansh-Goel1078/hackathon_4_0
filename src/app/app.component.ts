import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathon_4_0';
  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  map!: google.maps.Map;

  lat = 40.730610; // Latitude for New York City
  lng = -73.935242; // Longitude for New York City

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    const coordinates = new google.maps.LatLng(this.lat, this.lng);
    const mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: 8,
    };
    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

    // Optional: Add a marker
    new google.maps.Marker({
      position: coordinates,
      map: this.map,
    });
  }
}
