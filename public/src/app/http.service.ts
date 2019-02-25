import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }//this connects to the server to porvide post & get
  getAllFromService(){
    return this._http.get("/vacations");
  }
  getOneFromService(id: String){
    return this._http.get(`/vacations/${id}`);
  }
  updateVacationFromService(id: String, vacation: any){
    return this._http.put(`/vacations/${id}`, vacation);//`` interpolation
  }
  updateVacationWithReviewFromService(id:String, form){
    return this._http.put(`/vacations/${id}/review`, form);
  }
  newVacationFromService(form:any){
    return this._http.post("/vacations", form);
  }
  deleteVacationFromService(id: String){
    return this._http.delete(`/vacations/${id}`);
  }
  getWeather(vacation){//api
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q="+ vacation +"&APPID=10375097e4fd8f7738a7a8e9dff62252");//api
  }
}
