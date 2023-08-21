import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbCardModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import {MatCardModule} from '@angular/material/card';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AProposComponent } from './components/a-propos/a-propos.component';
import { ServicesComponent } from './components/services/services.component';
import { ReferencesComponent } from './components/references/references.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Contact2Component } from './components/contact2/contact2.component';

@NgModule({
  declarations: [
    AppComponent,
    AProposComponent,
    ServicesComponent,
    ReferencesComponent,
    GalerieComponent,
    ContactComponent,
    HeadersComponent,
    FooterComponent,
    AccueilComponent,
    Contact2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    MatCardModule,
    NbLayoutModule,
    NbCardModule,
    CarouselModule,
    NbLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
