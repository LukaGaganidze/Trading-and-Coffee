import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileNavService {
  navigationState = new BehaviorSubject(false);

  constructor() {}

  activateNavigation() {
    this.navigationState.next(true);
  }
  deActivateNavigation() {
    this.navigationState.next(false);
  }
}
