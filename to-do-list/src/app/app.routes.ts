import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'dashboard', component: DashboardPageComponent },
];

export const publicRoutes = ['/', '/register'];
