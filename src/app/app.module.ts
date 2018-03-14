import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PythonComponent } from './python/python.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { DevopsComponent } from './devops/devops.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PythonComponent,
    JavascriptComponent,
    DevopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
