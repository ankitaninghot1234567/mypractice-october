import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient:HttpClient) { }


  postApilcall(formData:any){
    return this.httpClient.post("http://localhost:3000/master",formData)
  }
}
