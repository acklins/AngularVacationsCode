import { Component, OnInit } from '@angular/core';// add on init
import {HttpService} from './http.service';//added this

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {// add implements OnInit
  title = 'public';
  vacationVacation: string;
  vacationActivity: string;
  vacationReview: string; 
  vacationStar: any;

  constructor(private _httpService: HttpService){}//add this
  ngOnInit(){//add this whole section
  this.vacationVacation = '';
  this.vacationActivity = '';
  this.vacationReview = '';
  this.vacationStar = {}
  }
  
}
