import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToggleStatusEvent } from '../interfaces/header-scroll.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HeaderScrollService {
  toggleDataEmit = new BehaviorSubject<IToggleStatusEvent>({
    toggleStatus: false,
    selectedPage: '',
  });

  constructor(private router: Router) {}

  updateToggleData(status: IToggleStatusEvent): void {
    this.router.navigate(['']);
    this.toggleDataEmit.next(status);
  }
}
