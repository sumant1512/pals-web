import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { IToggleStatusEvent } from './home-header.interface';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {
  @Output() toggleStatus = new EventEmitter<IToggleStatusEvent>();
  @ViewChild('header', { static: false }) header!: ElementRef;
  scrollStatus: boolean = false;
  isHeaderOpen: boolean = false;
  headerLinks = [
    { label: 'Home', id: 'banner' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
  ];
  toggleDataEmit: IToggleStatusEvent = {
    toggleStatus: false,
    selectedPage: '',
  };
  constructor() {}

  ngOnInit() {}

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
    this.isHeaderOpen = !this.isHeaderOpen;
  }

  // this function is for scrollPage of pages
  scrollPage(selectedPage: string) {
    this.isHeaderOpen = false; // this close the scrollPage bar for i-pad and mobile view.
    this.toggleDataEmit = {
      toggleStatus: false,
      selectedPage: selectedPage,
    };
    this.toggleStatus.emit(this.toggleDataEmit); // this emits the toggle status to parent component so that it can open or close the scrollPage accordingly.
  }
}
