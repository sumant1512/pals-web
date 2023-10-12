import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from '../../constants/app-routes.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class HeaderComponent {
  subscription = new Subscription();
  appRoutes = APP_ROUTES;
  bellItemCount = 1;
  selectedRoute = APP_ROUTES.ADMIN.PARENT;

  userInfo = {
    img: './../../assets/userImg.png',
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
