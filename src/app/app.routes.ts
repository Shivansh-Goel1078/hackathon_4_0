import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

const AppName = "| Hackathon 4.0 "
export const routes: Routes = [
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
      },
];
