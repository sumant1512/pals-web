import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private readonly router: Router
  ) {}

  logout() {
    this.authenticationService.logout().subscribe((resp) => {
      if (resp?.status) {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      }
    });
  }
}
