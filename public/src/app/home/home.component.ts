import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service"
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vacations: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getVacations();
  }

  getVacations() {
    let observable = this._httpService.getAllFromService();
    observable.subscribe(data => {
      console.log(data);
      if(!data['errors']) {
        this.vacations = data;
      }
    });
  }

  deleteVacation(id: string) {
    let observable = this._httpService.deleteVacationFromService(id);
    observable.subscribe(data => {
      console.log(data);
      if(!data['errors']) {
        this.getVacations();
      }
    })
  }
  getUrl(picture) {
    return "url('https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg')";
  
} 
}


