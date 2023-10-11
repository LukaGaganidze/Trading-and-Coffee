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

  startIndex: number = 0;
  endIndex: number = 12;

  totalItems: number = 0;
  totalPages: number = 0;

  // subscriptions
  subscriptionAwardsArray!: Subscription;
  startAndEndIndexSubscription!: Subscription;
  currentPageSubscription!: Subscription;

  constructor(private awardsSer: AwardsServiceService) {}

  ngOnInit() {
    this.awardsSer.awardsArraySelectedByYear.subscribe(
      (araayOfAwards: AwardTypes[]) => {
        this.awardsArray = araayOfAwards;

        this.totalItems = araayOfAwards.length;
        this.totalPages = Math.ceil(this.totalItems / 12);
      }
    );

    this.awardsSer.startAndEndIndexBSub.subscribe((data) => {
      this.startIndex = data.start;
      this.endIndex = data.end;
    });

    this.awardsSer.currentPageBsub.subscribe((curPage) => {
      this.currentPage = curPage;
    });
  }

  //#FFF PAGINATION
  prevPage() {
    this.awardsSer.reactToprevPageClick();

    // navigate on top of the page
    if (this.awardsContainer && this.awardsContainer.nativeElement) {
      this.awardsContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  nextPage() {
    this.awardsSer.reactToNextPageClick();

    // navigate on top of the page
    if (this.awardsContainer && this.awardsContainer.nativeElement) {
      this.awardsContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToPage(page: number) {
    this.awardsSer.reactToGoToPageClick(page);

    // navigate on top of the page
    if (this.awardsContainer && this.awardsContainer.nativeElement) {
      this.awardsContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getPagesArray(): number[] {
    const pagesArray: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  // #FFF selection and display by year selector
  onChangeSelectedYear(e: Event) {
    const chosenYear = (e.target as HTMLSelectElement).value;
    this.awardsSer.reactToYearChangeEvent(chosenYear);
  }

  ngOnDestroy(): void {
    this.subscriptionAwardsArray.unsubscribe();
    this.startAndEndIndexSubscription.unsubscribe();
    this.currentPageSubscription.unsubscribe();
  }
}
