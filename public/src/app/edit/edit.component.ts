import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service"
import { Router,ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form = {vacation: "", activity:""};
  id: any;
  errors = {};

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
        this.form = {vacation: data['vacation'], activity: data['activity']};
      }
    })
  }
  updateVacation() {
    this.id = this._route.snapshot.paramMap.get('id');
    let observable = this._httpService.updateVacationFromService(this.id, this.form);
    observable.subscribe(data => {
      console.log(data);
      if(data['error']) {
        this.errors = data['error']
      }else {
        this.form = {vacation: "", activity: ""};
        this._router.navigate([""]);
      }  
    });
  }
}
