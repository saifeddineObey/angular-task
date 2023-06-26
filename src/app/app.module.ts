import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {DepartmentsModule} from "./departments/departments.module"
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './api/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DepartmentsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }