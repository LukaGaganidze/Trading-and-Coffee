import { Component, OnDestroy } from '@angular/core';
import { ResearcheServiceService } from '../../../researche-service.service';

import { ResearchType } from '../../../researche-types';

import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscribable, Subscription } from 'rxjs';
import { ReportsItemServiceService } from './reports-item-service.service';

@Component({
  selector: 'app-research-reports-content-route-item',
  templateUrl: './research-reports-content-route-item.component.html',
  styleUrls: ['./research-reports-content-route-item.component.scss'],
})
export class ResearchReportsContentRouteItemComponent implements OnDestroy {
  // displayng not found if no result
  havResultsToDisplay = true;

  // Current Array of Researches
  researchesArray: ResearchType[] = [];

  // Researches behaviur subject
  arrayOfResearches = new BehaviorSubject<ResearchType[]>([]);

  // current year for month filter
  currentYear!: ResearchType[];
  // current month for month filter
  currentMonth!: ResearchType[];

  //#FFF PAGINATION
  itemsToDisplay: ResearchType[] = [];
  currentPage = 1;
  itemsPerPage = 12;

  // subscriptions
  routesSubscription!: Subscription;
  monthBehaviurSubSubscription!: Subscription;
  yearBehaviurSubSubscription!: Subscription;
  inputBehaviurSubSubscription!: Subscription;

  constructor(
    private resSer: ResearcheServiceService,
    private activeRoute: ActivatedRoute,
    private itemSer: ReportsItemServiceService
  ) {}

  ngOnInit(): void {
    // subscription to route change filtering by type
    this.routesSubscription = this.activeRoute.params.subscribe((route) => {
      const curRoute = route['type'];

      this.researchesArray =
        this.resSer.latestResaerchOnDynamicRouteChange(curRoute);

      this.arrayOfResearches.next(
        this.resSer.latestResaerchOnDynamicRouteChange(curRoute)
      );
    });

    //   // subscription to selection change event on years
    this.yearBehaviurSubSubscription = this.itemSer.yearBehaviurSub.subscribe(
      (year) => {
        const filteredByYears = this.researchesArray.filter((res) => {
          if (year === 'all') {
            return res;
          } else {
            return res.year === +year;
          }
        });

        this.arrayOfResearches.next(filteredByYears);
        this.currentYear = filteredByYears;
        this.currentMonth = filteredByYears;
      }
    );

    // subscription to selection change event on month
    this.monthBehaviurSubSubscription = this.itemSer.monthBehaviurSub.subscribe(
      (month) => {
        if (!this.currentYear) return;

        const filteredByMonth = this.currentYear.filter((res) => {
          if (month === 'all') {
            return res;
          } else {
            return res.month.toLocaleLowerCase() === month;
          }
        });

        this.arrayOfResearches.next(filteredByMonth);
        this.currentMonth = filteredByMonth;
      }
    );

    this.inputBehaviurSubSubscription = this.itemSer.inputBSub.subscribe(
      (input: string) => {
        const filteredByInput = this.currentMonth.filter((res) => {
          return res.title.toLocaleLowerCase().includes(input);
        });
        this.arrayOfResearches.next(filteredByInput);
      }
    );

    this.arrayOfResearches.subscribe((arr) => {
      this.itemsToDisplay = arr;
      if (arr.length < 1) {
        this.havResultsToDisplay = false;
      } else {
        this.havResultsToDisplay = true;
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  ngOnDestroy(): void {
    this.routesSubscription.unsubscribe();
    this.monthBehaviurSubSubscription.unsubscribe();
    this.yearBehaviurSubSubscription.unsubscribe();
    this.inputBehaviurSubSubscription.unsubscribe();
  }
}
