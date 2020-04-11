import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private username: any;
  private clientid: '860b7118b7d0d48d66c1';
  private clientSecret: 'b5fc39835d729e8df8796d747d780e071108a611';

  constructor(private http: HttpClient) {
    console.log("our service is running");
    this.username = "Nderitumwanu";
  }


  getProfileInfo() {
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id=" + this.clientid + "&client_secret="
      + this.clientSecret)
      .map(res => res);
  }

  getProfileRepos() {
    return this.http.get("https://api.github.com/users/"+ this.username +  "/repos?client_id=" + this.clientid + "&client_secret="
      + this.clientSecret)
      .map(res => res);
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
