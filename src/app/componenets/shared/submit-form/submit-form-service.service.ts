import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubmitFormServiceService {
  formState = new BehaviorSubject<boolean>(false);

  constructor() {}

  toFormActiveState() {
    this.formState.next(true);
  }
  toFormInactiveState() {
    this.formState.next(false);
  }
}
