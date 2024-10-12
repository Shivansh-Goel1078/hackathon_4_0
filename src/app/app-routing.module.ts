import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationGaurds } from './services/auth-gaurd.guard';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BookingSectionComponent } from './pages/booking-section/booking-section.component';

const AppName = "| Book My Ambulance (BMA)"

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: `Login ${AppName}`,
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: `Register ${AppName}`,
  },
  {
    path: 'home',
    component: HomeComponent,
    title: `Home ${AppName}`,
  },{
    path: 'contact-us',
    component: ContactUsComponent,
    title: `Contact Us ${AppName}`,
  }
  ,{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },{
    path: 'book-ambulance',
    component: BookingSectionComponent,
    title: `Booking Section ${AppName}`,
    canActivate: [AuthenticationGaurds]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
