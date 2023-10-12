import { Component } from '@angular/core';
import { IToggleStatusEvent } from './home-header/home-header.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  status: boolean = false;

  toggleforHeader(selectedPage: IToggleStatusEvent) {
    console.log(selectedPage);
    this.status = selectedPage.toggleStatus;
    if (selectedPage.selectedPage) {
      setTimeout(() => {
        document
          .getElementById(selectedPage.selectedPage as string)!
          .scrollIntoView({ behavior: 'smooth' });
      }, 1);
    }
  }
}
