import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isBeActive = false;
  constructor(private readonly authenticationService: AuthenticationService){}

  fetchBeHealth():void{
    this.authenticationService.isBeActive().subscribe(resp => {
      if(resp?.status){
        this.isBeActive = resp?.status;
      }
    })
  }
  
}
