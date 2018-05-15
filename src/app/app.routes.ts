import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MedicoComponent } from './medico/medico.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'medico', component: MedicoComponent },
  { path: 'medico/:action', component: MedicoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash: false});