import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(public auth: AuthService){}
center: google.maps.LatLngLiteral = { lat: 40.730610, lng: -73.935242 }; // Example coordinates
zoom = 12;
}
