import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service"
import { Router,ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  form = {name: "", star: "", review:""};
  id: any;
  errors = {};

  constructor(private _httpService: HttpService, private _router: Router, 
    private _route: ActivatedRoute) { }

  ngOnInit() {}

  submitReview() {
    this.id = this._route.snapshot.paramMap.get('id');
    let observable = this._httpService.updateVacationWithReviewFromService(this.id, this.form);
    observable.subscribe(data => {
      console.log(data);
      if(data['errors']) {
        this.errors = data['errors']
      }else {
        this._router.navigate(["/trip", this.id]);
      }
      this.form = {name: "", star: "", review: ""};
    })
  }
}
