import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'client',
        component:ClientComponent
    },
    {
        path:'sign-up',
        component:SignUpComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    }
];
