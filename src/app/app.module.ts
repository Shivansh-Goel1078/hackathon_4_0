import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactUsComponent,
    NavBarComponent,
    BookingSectionComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    SidebarModule,
    BrowserModule,
    AppRoutingModule,
    MessagesModule,
    TabMenuModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [
    MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
