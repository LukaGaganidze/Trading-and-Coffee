import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportsItemServiceService implements OnInit {
  yearBehaviurSub = new BehaviorSubject<number | string>('all');
  monthBehaviurSub = new BehaviorSubject<number | string>('all');
  inputBSub = new BehaviorSubject<string>('');

  constructor() {}

  ngOnInit(): void {}

  reactToOnFilterByYearChaneg(year: number | string) {
    this.yearBehaviurSub.next(year);
  }
  reactToOnFilterByMonthChaneg(month: string) {
    this.monthBehaviurSub.next(month);
  }
  reactToInoutSubmit(input: string) {
    this.inputBSub.next(input);
  }
}
