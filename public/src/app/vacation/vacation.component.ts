import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service"
import { Router, ParamMap, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {
  id: any;
  vacation: any;
  city: any;
  weather:string;

  constructor(private _httpService: HttpService, private _router: Router, 
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getVacation();
  }
  getVacation() {
    this.id = this._route.snapshot.paramMap.get('id');
    let observable = this._httpService.getOneFromService(this.id);
    observable.subscribe(data => {
      console.log(data);
      if(!data['error']) {
        this.vacation = data;
        this.getweather();
      }
    });
  }
  getweather(){//api whole thing needed
    //this.city = city;//api
    console.log("Running getweather()", this.vacation)
    let observable = this._httpService.getWeather(this.vacation.vacation);//api
    observable.subscribe(data => {
      console.log("This is data:", data);
      let kelvin = data['main']['temp']
      console.log(kelvin)
      let fah = (((kelvin - 273.15) * 9 / 5) + 32).toFixed(2)
      this.weather = ""+ fah + " F"
    });
  }

}
