import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AddEventComponent } from './modals/add-event/add-event.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEventComponent
  ],
  imports: [
    MDBBootstrapModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddEventComponent]
})
export class AppModule { }
