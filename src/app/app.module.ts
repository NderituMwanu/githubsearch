import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileService } from '../app/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AboutgsComponent } from './aboutgs/aboutgs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { User } from './user class/user';
import { Repository } from './repository class/repository';
import { CustomDirective } from './custom.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutgsComponent,
    NavbarComponent,
    CustomDirective,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
    
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
