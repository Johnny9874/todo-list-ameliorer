import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Assure-toi d'importer RouterModule


import { appRoutes } from './app.routes';  // Importer les routes définies

@NgModule({
  declarations: [
    AppComponent,
    // Autres composants ici
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),  // Utiliser RouterModule ici pour activer la navigation
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
