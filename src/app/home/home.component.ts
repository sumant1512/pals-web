import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isBeActive = false;
  constructor(private readonly authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.fetchBeHealth();
  }

  fetchBeHealth(): void {
    this.authenticationService.isBeActive().subscribe((resp) => {
      if (resp?.status) {
        this.isBeActive = resp?.status;
      }
    });
  }
}
