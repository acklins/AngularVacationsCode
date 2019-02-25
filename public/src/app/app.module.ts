import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';

import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import {VacationComponent } from './vacation/vacation.component';
import { ReviewComponent } from './review/review.component';
import { EditComponent } from './edit/edit.component'; //edit

import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    VacationComponent,
    ReviewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
