import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid:'860b7118b7d0d48d66c1';
  private clientSecret:'6abeedb8a2254184c3469d3a64a782522ab611f8';
  
  constructor(private http: HttpClient) { 
    console.log("our service is running");
    this.username = "Nderitumwanu";
  }

    getProfInfo(){
      return this.http.get("https://api.github.com/users/NderituMwanu" + "?client_id=" + this.clientid + "&client_secret="
      + this.clientSecret)
      .map(res => res); 
    }
}
