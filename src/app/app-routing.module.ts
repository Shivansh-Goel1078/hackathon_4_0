import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationGaurds } from './services/auth-gaurd.guard';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const AppName = "| Hackathon 4.0"

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
    canActivate: [AuthenticationGaurds]
  },{
    path: 'contact-us',
    component: ContactUsComponent,
    title: `Contact Us ${AppName}`,
  }
  ,{
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
