import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;


  constructor(private profileService: ProfileService) {
    
  }
  findUserProfile() {
    this.profileService.updateProf(this.username);
    this.profileService.getProfInfo().subscribe(profile => {
      
      this.profile = profile;

    });

    this.profileService.getProfRepos().subscribe(repos => {
      
       this.repos = repos;
    });
    
  }

  ngOnInit(): void {
  }

}
 