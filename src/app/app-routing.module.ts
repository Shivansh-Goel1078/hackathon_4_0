import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationGaurds, AuthenticationGaurdsAccount } from './services/auth-gaurd.guard';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BookingSectionComponent } from './pages/booking-section/booking-section.component';
import { EmergencySituationComponent } from './pages/emergency-situation/emergency-situation.component';
import { ServicesComponent } from './pages/services/services.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { OrderMedicineComponent } from './pages/order-medicine/order-medicine.component';
import { AccountUserComponent } from './pages/account-user/account-user.component';

const AppName = "| Book My Ambulance (BMA)"

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: `Login ${AppName}`,
    canActivate: [AuthenticationGaurds],
  },{
    path: 'emergency',
    component: EmergencySituationComponent,
    title: `Emergency ${AppName}`,
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: `Register ${AppName}`,
    canActivate: [AuthenticationGaurds],
  },
  {
    path: 'account',
    component: AccountUserComponent,
    title: `Account ${AppName}`,
    canActivate: [AuthenticationGaurdsAccount],
  },
  {
    path: 'book-appointment',
    component: BookAppointmentComponent,
    title: `Book Appointment ${AppName}`,
  },
  {
    path: 'order-medicine',
    component: OrderMedicineComponent,
    title: `Order Medicine ${AppName}`,
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
    path: 'services',
    component: ServicesComponent,
    title: `Services ${AppName}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
