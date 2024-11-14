import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageService } from 'primeng/api';
import { BookingSectionComponent } from './pages/booking-section/booking-section.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { EmergencySituationComponent } from './pages/emergency-situation/emergency-situation.component';
import { EmergencyButtonComponent } from './components/emergency-button/emergency-button.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './pages/section/departments/departments.component';
import { ServicesComponent } from './pages/services/services.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { OrderMedicineComponent } from './pages/order-medicine/order-medicine.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { AccountUserComponent } from './pages/account-user/account-user.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent, 
    ContactUsComponent,
    NavBarComponent,
    BookingSectionComponent,
    EmergencyButtonComponent,
    DepartmentsComponent,
    ServicesComponent,
    BookAppointmentComponent,
    OrderMedicineComponent,
    AccountUserComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    SidebarModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    CarouselModule,
    AppRoutingModule,
    MessagesModule,
    TabMenuModule,
    ButtonModule,
    GalleriaModule,
    ToastModule,
    GoogleMapsModule ,
    TabViewModule,
    InputTextModule,
    PasswordModule,
    CalendarModule,
    ButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    MessageService,
    provideAuth0({
      domain: 'dev-o0l2f678gkcieha4.us.auth0.com', // Replace with your Auth0 Domain
      clientId: 'qZZNCfe3hwWrAAlHsrQo9ZioL6qpVP7N', // Replace with your Auth0 Client ID
      authorizationParams: {
        redirect_uri: window.location.origin + '/register', // Redirect after login
      },
    }),
  ],
  exports:[NavBarComponent,DepartmentsComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
