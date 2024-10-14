import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-emergency-button',
  templateUrl: './emergency-button.component.html',
  styleUrls: ['./emergency-button.component.css']
})
export class EmergencyButtonComponent {
  constructor(public router: Router){}
  public onEmergencySituation(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
          this.router.navigate(['emergency'])
      },
      (error) => {
          console.error("Error getting user location:", error);
      }
  );
   }
}
