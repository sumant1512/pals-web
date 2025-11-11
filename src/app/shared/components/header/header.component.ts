import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderScrollService } from '../../services/header-scroll.service';
import { AuthenticationService } from '../../services/authentication.service';
import { FeatureService } from 'src/app/customer/feature.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { APP_ROUTES } from '../../constants/app-routes.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  subcription = new Subscription();
  @ViewChild('header', { static: false }) header!: ElementRef;
  scrollStatus: boolean = false;
  isHeaderOpen: boolean = false;
  isUserLoggedIn: boolean = false;
  headerLinks = [
    { label: 'Home', id: 'banner', routePath: APP_ROUTES.HOME },
    { label: 'About Us', id: 'about', routePath: APP_ROUTES.ABOUT_US.PARENT },
    {
      label: 'Products',
      id: 'products',
      routePath: APP_ROUTES.PRODUCTS.PARENT,
    },
  ];
  // Callback property to allow external method invocation
  callback?: () => void;
  constructor(
    private headerScrollService: HeaderScrollService,
    private authenticationService: AuthenticationService,
    private router: Router,
    readonly featureService: FeatureService,
    private sessionStorageService: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.checkLogin();
    // Example: call the callback if it's set
    if (this.callback) {
      this.callback();
    }
  }

  checkLogin(): void {
    this.subcription.add(
      this.authenticationService.isUserLoggedIn().subscribe((resp) => {
        this.isUserLoggedIn = resp;
      })
    );
  }

  authClick(): void {
    if (this.isUserLoggedIn) {
      this.subcription.add(
        this.authenticationService.logout().subscribe((response) => {
          this.sessionStorageService.clearAll();
        })
      );
    }
    this.router.navigate(['login']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 750) {
      this.scrollStatus = true;
      this.header.nativeElement.classList.add('sticky');
    } else {
      this.scrollStatus = false;
      this.header.nativeElement.classList.remove('sticky');
    }
  }

  // this function is to open and close the scrollPage in mobile and i-pad view
  navToggle() {
    if (this.isHeaderOpen) {
      setTimeout(() => {
        this.isHeaderOpen = !this.isHeaderOpen;
      }, 190);
    } else {
      this.isHeaderOpen = !this.isHeaderOpen;
    }
  }

  // this function is for scrollPage of pages
  scrollPage(selectedPage: string) {
    this.isHeaderOpen = false; // this close the scrollPage bar for i-pad and mobile view.
    const toggleDataEmit = {
      toggleStatus: false,
      selectedPage: selectedPage,
    };
    this.headerScrollService.updateToggleData(toggleDataEmit);
  }

  navigateToPage(routePath: string) {
    this.router.navigate([routePath]);
  }
}
