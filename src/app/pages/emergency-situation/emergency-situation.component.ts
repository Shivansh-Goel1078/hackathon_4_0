import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GoogleMapsModule, MapDirectionsService } from '@angular/google-maps';
import { DomSanitizer } from '@angular/platform-browser';
import { map, Observable,of } from 'rxjs';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { HospitalService } from 'src/app/services/hospital.service';
type DepartmentKeys = 'Dermatology' | 'Cardiology' | 'Orthopedic' | 'Neurology';


import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
@Component({
  selector: 'app-emergency-situation',
  standalone: true,
  templateUrl: './emergency-situation.component.html',
  imports:[GoogleMapsModule,NgIf,NgFor],
  styleUrls: ['./emergency-situation.component.css']
})
export class EmergencySituationComponent implements AfterViewInit {
  private db: any;
  constructor(private sanitizer: DomSanitizer,private hospitalService : HospitalService,private mapDirectionsService: MapDirectionsService){
    const firebaseConfig = {
      apiKey: "AIzaSyB9zbpJ6J8Q5h9I4_YCM15bVU2oa22KUuk",
      authDomain: "hackathon40-e51b6.firebaseapp.com",
      databaseURL: "https://hackathon40-e51b6-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "hackathon40-e51b6",
      storageBucket: "hackathon40-e51b6.appspot.com",
      messagingSenderId: "723966378859",
      appId: "1:723966378859:web:7754889868fde2160f422e",
      measurementId: "G-RV5VBECN2Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  this.db = getDatabase(app);
  }
  center: google.maps.LatLngLiteral = { lat: 31.51679331043587, lng: 74.35149289364826 }; // Initial center coordinates
  zoom = 16; // Initial zoom level
  sectionSelection = true
  
  mapIframeSrc: any = '';
  
  
  lat: number = 31.51679331043587; // Latitude
  lng: number = 74.35149289364826; // Longitude
  mapView  =false
  departmentSectionView = true
  
  markerPosition: google.maps.LatLngLiteral = {lat: this.lat,lng:this.lng};
  
ngAfterViewInit(): void {
  const cords = localStorage.getItem("cp")
  navigator.geolocation.getCurrentPosition(
    (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coords = "latitude" + latitude + "longitude" + longitude
        localStorage.setItem(JSON.stringify(coords),"cp")
        this.lat = latitude
        this.lng = longitude;
        this.markerPosition = {lat: this.lat,lng:this.lng}
        this.initMap

    }
  )
}
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      console.log(event.latLng.toJSON()); // Log latitude and longitude on click
    }
  }
  directionsResults$!: Observable<google.maps.DirectionsResult | undefined>;

  initMap() {
    const mapElement = document.getElementById('map') as HTMLElement;
    if (mapElement) {
      const map = new google.maps.Map(mapElement, {
        center: { lat: this.lat, lng: this.lng },
        zoom: this.zoom,
      });
      this.addMarker(map);
    } else {
      console.error("Map element not found");
    }
  }

  addMarker(map:any) {
    const marker = new google.maps.Marker({
      position: { lat: this.lat, lng: this.lng },
      map,
      title: 'Your Location',
    });

    // Create a circle around the marker with a radius of approximately 10 cm
    const circle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map,
      center: { lat: this.lat, lng: this.lng },
      radius: 1, // Radius in meters (10 cm)
    });
  }

  

  departmentSelection(){
    this.departmentSectionView = false
    this.mapView = true
  }
  
  selectedDepartment: string | null = null;

  showHospitals(department: string) {
    
    this.departmentSectionView = false
    this.selectedDepartment = department;
  }

  hospitalData = {
    'Skin Health Hospital': { lat: 34.0522, lng: -118.2437 },
    'Dermatology Care Center': { lat: 34.0523, lng: -118.2438 },
    'Skin & Beauty Clinic': { lat: 34.0524, lng: -118.2439 },
    'Advanced Dermatology Institute': { lat: 34.0525, lng: -118.2440 },
    'Cosmetic Skin Solutions': { lat: 34.0526, lng: -118.2441 },
    
    'Heart Health Hospital': { lat: 34.0527, lng: -118.2442 },
    'Cardiac Care Center': { lat: 34.0528, lng: -118.2443 },
    'Cardiology Specialists Clinic': { lat: 34.0529, lng: -118.2444 },
    'Heart & Vascular Institute': { lat: 34.0530, lng: -118.2445 },
    'Cardiac Rehabilitation Center': { lat: 34.0531, lng: -118.2446 },
  
    'Bone & Joint Hospital': { lat: 34.0532, lng: -118.2447 },
    'Orthopedic Care Center': { lat: 34.0533, lng: -118.2448 },
    'Sports Medicine Clinic': { lat: 34.0534, lng: -118.2449 },
    'Advanced Orthopedic Institute': { lat: 34.0535, lng: -118.2450 },
    'Pediatric Orthopedic Hospital': { lat: 34.0536, lng: -118.2451 },
  
    'Neurology Health Center': { lat: 34.0537, lng: -118.2452 },
    'Brain & Spine Institute': { lat: 34.0538, lng: -118.2453 },
    'Neuro Care Clinic': { lat: 34.0539, lng: -118.2454 },
    'Cognitive Health Hospital': { lat: 34.0540, lng: -118.2455 },
    'Pediatric Neurology Center': { lat: 34.0541, lng: -118.2456 }
  };

  hospitalClicked(hospitalName: string) {
    console.log(hospitalName);

    this.selectedDepartment = null
    this.mapView = true
    const hos = hospitalName
    this.sectionSelection = false
    localStorage.removeItem("hospital selected")
    localStorage.setItem("hospital selected",JSON.stringify(hospitalName))
    
      
    const coords = this.hospitalService.getCoordinates(JSON.parse(localStorage.getItem("hospital selected")!));
    
    
    this.startNavigation({ lat: this.lat, lng: this.lng }, { lat: 29.854263, lng: 77.888000 })
    console.log({ lat: this.lat, lng: this.lng }, { lat: coords![0], lng: coords![1] })
    }

  
public saveLocation(userId: string, latitude: number, longitude: number): void {
  set(ref(this.db, 'locations/' + userId), {
      latitude: latitude,
      longitude: longitude
  });
}

// Send location to Firebase
public sendLocationToFirebase(userId: string): void {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          const userLocation = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
          };
          // Save location to Firebase
          this.saveLocation(userId, userLocation.latitude, userLocation.longitude);
      }, (error) => {
          console.error("Geolocation error:", error);
      });
  } else {
      console.error("Geolocation is not supported by this browser.");
  }
}

// Get locations from Firebase
public getLocations(): void {
  const locationsRef = ref(this.db, 'locations');
  onValue(locationsRef, (snapshot) => {
      const locations = snapshot.val();
      console.log(locations); // Handle locations as needed
      // Call function to generate Google Maps link here if needed
  });
}

startNavigation(origin: { lat: number, lng: number }, destination: { lat: number, lng: number }) {
  const originString = `${origin.lat},${origin.lng}`;
  const destinationString = `${destination.lat},${destination.lng}`;
  
  this.sendLocationToFirebase("Shiavsnh")
  // Construct the Google Maps Embed API URL for directions
  const url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyC6-pQdbnxrIKHNKgQbH2YwpzZYAsvqLpI=&origin=${originString}&destination=${destinationString}&mode=driving`;

  console.log(this.getLocations)

  
  this.mapIframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

}
