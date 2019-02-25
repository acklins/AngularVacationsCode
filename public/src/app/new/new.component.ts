import { HttpService } from "../http.service"
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  form = {
    vacation: "",
    activity: ""
  }
  errors = {};

  constructor(private _httpService: HttpService, private _router: Router) { 

  }

  ngOnInit() {

  }

  submitForm() {
    let observable = this._httpService.newVacationFromService(this.form);
    observable.subscribe(data => {
      console.log(data);
      if(data["errors"]) {
        this.errors = data["errors"]
        console.log(this.errors)
      }else {
        this._router.navigate(["/"]);
        this.form = {vacation: "", activity: ""};     
      }
    });
  }
  }

