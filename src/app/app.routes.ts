import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { Success } from './success/success';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'success', component: Success },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
