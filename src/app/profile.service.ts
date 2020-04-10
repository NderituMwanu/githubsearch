import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid:'';
  private clientSecret:'';
  
  constructor(private http: HttpClient) { 
    console.log("our service is running");
    this.username = "Nderitumwanu";
  }

    getProfInfo(){
      return this.http.get("")
    }
}
