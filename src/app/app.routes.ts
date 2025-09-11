import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ActivitiesComponent} from './pages/activities/activities.component';
import {ActivityDetailComponent} from './pages/activity-detail/activity-detail.component';
import {ReservationsComponent} from './pages/reservations/reservations.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'activities/:id', component: ActivityDetailComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}, // redirige a login por defecto
  {path: '**', redirectTo: 'login'} // ruta por defecto si no existe

];

