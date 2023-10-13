import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AwardTypes } from './awar-types';

import { AWARDS_DATA } from './awards-data';

@Injectable({
  providedIn: 'root',
})
export class AwardsServiceService implements OnInit {
  // array of all awards
  arrayOfAwards: AwardTypes[] = AWARDS_DATA;

  currentArraySelectedByYear: AwardTypes[] = [];

  // BehaviurSubjects
  // Latest Version Of Array Of Awards (selected by user)
  awardsArraySelectedByYear = new BehaviorSubject<AwardTypes[]>(
    this.arrayOfAwards
  );

  constructor() {}

  ngOnInit(): void {
    this.awardsArraySelectedByYear.subscribe((awardsArr) => {
      this.currentArraySelectedByYear = awardsArr;
    });
  }

  //#fff *********** selecting by year *********** //
  reactToYearChangeEvent(year: number | string) {
    if (year === 'all') {
      this.awardsArraySelectedByYear.next(this.arrayOfAwards);
    } else {
      this.awardsArraySelectedByYear.next(this.awardsSelectedByYear(year));
    }
  }
  awardsSelectedByYear(year: number | string) {
    return this.arrayOfAwards.filter((award) => +award.year === +year);
  }
}
