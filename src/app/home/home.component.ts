import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderScrollService } from '../shared/services/header-scroll.service';
import { Subscription } from 'rxjs';
import { IToggleStatusEvent } from '../shared/interfaces/header-scroll.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  status: boolean = false;

  constructor(private headerScrollService: HeaderScrollService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.headerScrollService.toggleDataEmit.subscribe((resp) => {
        this.toggleforHeader(resp);
      })
    );
  }

  toggleforHeader(selectedPage: IToggleStatusEvent) {
    this.smoothScrollToElementWithOffset(
      selectedPage.selectedPage as string,
      100
    );
  }

  smoothScrollToElementWithOffset(elementId: string, offset: number) {
    console.log(elementId);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
