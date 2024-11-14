import { Injectable } from '@angular/core';
interface Hospital {
  name: string;
  coordinates: { lat: number; lng: number };
}

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private hospitals: Hospital[] = [
    { name: 'Skin Health Hospital', coordinates: { lat: 34.0522, lng: -118.2437 } },
    { name: 'Dermatology Care Center', coordinates: { lat: 34.0523, lng: -118.2438 } },
    { name: 'Skin & Beauty Clinic', coordinates: { lat: 34.0524, lng: -118.2439 } },
    { name: 'Advanced Dermatology Institute', coordinates: { lat: 34.0525, lng: -118.2440 } },
    { name: 'Cosmetic Skin Solutions', coordinates: { lat: 34.0526, lng: -118.2441 } },
    { name: 'Heart Health Hospital', coordinates: { lat: 34.0527, lng: -118.2442 } },
    { name: 'Cardiac Care Center', coordinates: { lat: 34.0528, lng: -118.2443 } },
    { name: 'Cardiology Specialists Clinic', coordinates: { lat: 34.0529, lng: -118.2444 } },
    { name: 'Heart & Vascular Institute', coordinates: { lat: 34.0530, lng: -118.2445 } },
    { name: 'Cardiac Rehabilitation Center', coordinates: { lat: 34.0531, lng: -118.2446 } },
    { name: 'Bone & Joint Hospital', coordinates: { lat: 34.0532, lng: -118.2447 } },
    { name: 'Orthopedic Care Center', coordinates: { lat: 34.0533, lng: -118.2448 } },
    { name: 'Sports Medicine Clinic', coordinates: { lat: 34.0534, lng: -118.2449 } },
    { name: 'Advanced Orthopedic Institute', coordinates: { lat: 34.0535, lng: -118.2450 } },
    { name: 'Pediatric Orthopedic Hospital', coordinates: { lat: 34.0536, lng: -118.2451 } },
    { name: 'Neurology Health Center', coordinates: { lat: 34.0537, lng: -118.2452 } },
    { name: 'Brain & Spine Institute', coordinates: { lat: 34.0538, lng: -118.2453 } },
    { name: 'Neuro Care Clinic', coordinates: { lat: 34.0539, lng: -118.2454 } },
    { name: 'Cognitive Health Hospital', coordinates: { lat: 34.0540, lng: -118.2455 } },
    { name: 'Pediatric Neurology Center', coordinates: { lat: 34.0541, lng:-118.2456} }
  ];

  getCoordinates(hospitalName: string) {
    
    const hospital = this.hospitals.find(h => h.name === hospitalName);
    
    // Check if the hospital was found
    if (hospital) {
        // Display the hospital's coordinates in a readable format
        
        return [hospital.coordinates.lat,hospital.coordinates.lng];
    }
    
    console.error('Hospital not found');
    return null;
}
}
