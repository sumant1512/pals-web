import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../shared/services/session-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private readonly router: Router,
    private readonly sessionStorageService: SessionStorageService
  ) {}

  logout() {
    this.authenticationService.logout().subscribe((resp) => {
      if (resp?.status) {
        this.sessionStorageService.clearAll();
        this.router.navigate(['/login']);
      }
    });
  }
}
