import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { AwardTypes } from './awar-types';
import { AwardsServiceService } from './awards-service.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'about-awards-all-awards',
  templateUrl: './all-awards.component.html',
  styleUrls: ['./all-awards.component.scss'],
})
export class AllAwardsComponent implements OnInit {
  @ViewChild('awardsContainer') awardsContainer: ElementRef | undefined;

  awardsArray: AwardTypes[] = [];

  pageSize: number = 12;
  currentPage: number = 1;
  startIndex: number = 0;
  endIndex: number = this.pageSize;

  totalItems: number = 0;
  totalPages: number = 0;

  constructor(
    private awardsSer: AwardsServiceService,
    private viewPortScroll: ViewportScroller
  ) {}

  ngOnInit() {
    this.awardsSer.awardsBehaviourSubject.subscribe(
      (araayOfAwards: AwardTypes[]) => {
        this.awardsArray = araayOfAwards;

        this.totalItems = araayOfAwards.length;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      }
    );
  }

  // #FFF selection and display by year selector
  onChangeSelectedYear(e: Event) {
    const chosenYear = (e.target as HTMLSelectElement).value;
    this.awardsSer.reactToYearChangeEvent(chosenYear);
  }

  //#FFF PAGINATION
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageRange();
    }
    if (this.awardsContainer && this.awardsContainer.nativeElement) {
      this.awardsContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  nextPage() {
    if (this.endIndex < this.awardsArray.length) {
      this.currentPage++;
      this.updatePageRange();
    }
    if (this.awardsContainer && this.awardsContainer.nativeElement) {
      this.awardsContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePageRange();
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

  private updatePageRange() {
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = this.startIndex + this.pageSize;
  }
}
