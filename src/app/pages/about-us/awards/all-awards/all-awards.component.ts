import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { AwardTypes } from './awar-types';
import { AwardsServiceService } from './awards-service.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'about-awards-all-awards',
  templateUrl: './all-awards.component.html',
  styleUrls: ['./all-awards.component.scss'],
})
export class AllAwardsComponent implements OnInit, OnDestroy {
  @ViewChild('awardsContainer') awardsContainer: ElementRef | undefined;

  awardsArray: AwardTypes[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 12;

  startIndex: number = 0;

  totalItems: number = 0;
  totalPages: number = 0;

  // subscriptions
  subscriptionAwardsArray!: Subscription;

  constructor(private awardsSer: AwardsServiceService) {}

  ngOnInit() {
    this.subscriptionAwardsArray =
      this.awardsSer.awardsArraySelectedByYear.subscribe(
        (araayOfAwards: AwardTypes[]) => {
          this.awardsArray = araayOfAwards;

          this.totalItems = araayOfAwards.length;
          this.totalPages = Math.ceil(this.totalItems / 12);
        }
      );
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  // #FFF selection and display by year selector
  onChangeSelectedYear(e: Event) {
    const chosenYear = (e.target as HTMLSelectElement).value;
    this.awardsSer.reactToYearChangeEvent(chosenYear);
  }

  ngOnDestroy(): void {
    this.subscriptionAwardsArray.unsubscribe();
  }
}
