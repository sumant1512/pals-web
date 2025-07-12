import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  subscription = new Subscription();
  appRoutes = APP_ROUTES;
  bellItemCount = 1;
  selectedRoute = APP_ROUTES.ADMIN.PARENT;

  userInfo = {
    img: 'userImg.png',
    imgAlt: 'User',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getUserInfo(): void {}

  toggleHamburger() {
    const hamburger = document.getElementById('hamburger-9');
    if (hamburger?.classList.contains('is-active')) {
      hamburger.classList.remove('is-active');
    } else {
      hamburger?.classList.add('is-active');
    }
  }

  detectMobile(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /(android|webos|iphone|ipod|blackberry|windows phone)/.test(
      userAgent
    );
  }

  navigateToPage(routePath: string): void {
    if (this.detectMobile() && routePath) {
      const headerContent = document.getElementById('navbarSupportedContent');
      headerContent?.classList.remove('show');
      this.toggleHamburger();
    }
    this.selectedRoute = routePath;
    this.router.navigate([routePath]);
  }
}
