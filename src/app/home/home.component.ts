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
    this.smoothScrollToElementWithOffset(
      selectedPage.selectedPage as string,
      100
    );
  }

  smoothScrollToElementWithOffset(elementId: string, offset: number) {
    const element = document.getElementById(elementId);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const targetScrollY = elementTop - offset;

      const distance = targetScrollY - window.scrollY;

      const duration = 1;
      const startTime = performance.now();

      function scrollStep(timestamp: any) {
        const timeElapsed = timestamp - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, window.scrollY + distance * progress);

        if (timeElapsed < duration) {
          window.requestAnimationFrame(scrollStep);
        }
      }

      window.requestAnimationFrame(scrollStep);
    }
  }
}
