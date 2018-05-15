import { MedicoService } from './services/medico.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rotas
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { MedicoComponent } from './medico/medico.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    HomeComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule
  ],
  providers: [
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
