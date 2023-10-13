import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ResearchType } from './researche-types';
import { RESEARCH_DATA } from './research-data';

@Injectable({
  providedIn: 'root',
})
export class ResearcheServiceService implements OnInit {
  // on switching routes change value of years filter to all
  backToAll = new BehaviorSubject('all');

  // Original array containing all research items
  researchOriginalArray: ResearchType[] = RESEARCH_DATA;
  latestResearchArr!: ResearchType[];
  // first 4 research items for landing page
  arrayForResearchLandingPage!: ResearchType[];

  constructor() {
    this.arrayForResearchLandingPage = this.researchOriginalArray.slice(0, 4);
  }

  ngOnInit(): void {}

  // return research array on route change on researches filter  componenet
  latestResaerchOnDynamicRouteChange(param: string) {
    this.backToAll.next('all');

    let filteredResearchesArr: ResearchType[] = [];

    if (param === 'all') {
      filteredResearchesArr = this.researchOriginalArray;
    } else {
      filteredResearchesArr = this.researchOriginalArray.filter(
        (res) => res.type === param
      );
    }

    this.latestResearchArr = filteredResearchesArr;
    return filteredResearchesArr;
  }
}
