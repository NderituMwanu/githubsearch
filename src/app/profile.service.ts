import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private username: any;
  private clientid: '860b7118b7d0d48d66c1';
  private clientSecret: '';

  constructor(private http: HttpClient) {
    console.log("Service is on");
    this.username = "NderituMwanu";
  }


  getProfInfo() {
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id=" + this.clientid + "&client_secret="
      + this.clientSecret)
      .map(res => res);
  }

  getProfRepos() {
    return this.http.get("https://api.github.com/users/"+ this.username +  "/repos?client_id=" + this.clientid + "&client_secret="
      + this.clientSecret)
      .map(res => res);
  }

  updateProf(username: string) {
    this.username = username;
  }
}
