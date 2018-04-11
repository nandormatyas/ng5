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
import { LogService } from './shared/log.service';
import { LogTestComponent } from './log-test/log-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PythonComponent,
    JavascriptComponent,
    DevopsComponent,
    LogTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [
    DataService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
