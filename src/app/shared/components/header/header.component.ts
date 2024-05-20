import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HeaderScrollService } from '../../services/header-scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('header', { static: false }) header!: ElementRef;
  scrollStatus: boolean = false;
  isHeaderOpen: boolean = false;
  headerLinks = [
    { label: 'Home', id: 'banner' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
  ];
  constructor(
    private headerScrollService: HeaderScrollService,
    private router: Router
  ) {}

  openLoginModal(): void {
    console.log('Navigate to login');
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
}
