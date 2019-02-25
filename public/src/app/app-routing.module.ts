import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent } from './home/home.component'; //home
import {NewComponent } from './new/new.component'; //new
import {VacationComponent } from './vacation/vacation.component'; //vacation
import {ReviewComponent } from './review/review.component'; //review
import {EditComponent } from './edit/edit.component'; //edit

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "new", component: NewComponent},//when going to new route show newComponent

 
  {path: "trip/:id/Review", pathMatch:"full", component: ReviewComponent},
  {path: "edit/:id", pathMatch: "full", component: EditComponent},
  {path: "trip/:id", pathMatch: "full", component: VacationComponent}//must follow exact pattern to get this route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
