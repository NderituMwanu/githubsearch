import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutgsComponent } from '../app/aboutgs/aboutgs.component';
import { ProfileComponent } from '../app/profile/profile.component';
import { Repository } from './repository class/repository';
import { User } from './user class/user';




const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'aboutgs', component: AboutgsComponent},
  { path: 'repository', component: Repository },
  {path:'user', component: User }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
