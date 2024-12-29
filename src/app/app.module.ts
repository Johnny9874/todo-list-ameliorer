import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';  // Assure-toi que le chemin est correct
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Importation de CommonModule

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,  // Déclaration de TaskListComponent ici
    // Autres composants
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,  // Ajoute CommonModule ici pour que *ngFor et *ngIf fonctionnent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



