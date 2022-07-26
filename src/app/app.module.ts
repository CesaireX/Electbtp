import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { GeneralitesComponent } from './pages/generalites/generalites.component';
import { EnergieComponent } from './pages/energie/energie.component';
import { EtudesComponent } from './pages/etudes/etudes.component';
import { GenieComponent } from './pages/genie/genie.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { DepannageComponent } from './pages/depannage/depannage.component';
import { VentesComponent } from './pages/ventes/ventes.component';
import { PolitiquesSstComponent } from './pages/politiques-sst/politiques-sst.component';
import { PolitiquesEnvironnementaleComponent } from './pages/politiques-environnementale/politiques-environnementale.component';
import { RealisationsComponent } from './pages/realisations/realisations.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    GeneralitesComponent,
    EnergieComponent,
    EtudesComponent,
    GenieComponent,
    MaintenanceComponent,
    DepannageComponent,
    VentesComponent,
    PolitiquesSstComponent,
    PolitiquesEnvironnementaleComponent,
    RealisationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
