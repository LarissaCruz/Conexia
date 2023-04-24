import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserveService {
  private isVisible = new BehaviorSubject<boolean>(false)
  isVisible$ = this.isVisible.asObservable()

  constructor() { }

  show() {
    this.isVisible.next(true)
  }

  hidden() {
    this.isVisible.next(false)
  }
}
