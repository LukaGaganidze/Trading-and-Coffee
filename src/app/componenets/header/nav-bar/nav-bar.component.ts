import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavbarServviceService } from './navbar-servvice.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  @Input() wasScrolled = false;

  // control values
  stateValueAboutUs = false;
  stateValueResearch = false;
  stateValueBrokerage = false;
  stateValueInverstments = false;
  stateValueInverstmentsBanking = false;
  stateValueMedia = false;
  stateValueClientLogIn = false;

  // SUBSCRIPTIONS
  private subscriptionAboutUs!: Subscription;
  private subscriptionResearch!: Subscription;
  private subscriptionBrokerage!: Subscription;
  private subscriptionInverstments!: Subscription;
  private subscriptionInverstmentsBanking!: Subscription;
  private subscriptionMedia!: Subscription;
  private subscriptionClientLogIn!: Subscription;

  constructor(private navService: NavbarServviceService) {}

  ngOnInit(): void {
    // #fff
    this.subscriptionAboutUs = this.navService.aboutUsBSubject.subscribe(
      (state) => {
        this.stateValueAboutUs = state;
      }
    );

    // #fff
    this.subscriptionResearch = this.navService.researchBSubject.subscribe(
      (state) => {
        this.stateValueResearch = state;
      }
    );

    // #fff
    this.subscriptionBrokerage = this.navService.brokerageBSubject.subscribe(
      (state) => {
        this.stateValueBrokerage = state;
      }
    );

    // #fff
    this.subscriptionInverstments =
      this.navService.investmentsBSubject.subscribe((state) => {
        this.stateValueInverstments = state;
      });

    // #fff
    this.subscriptionInverstmentsBanking =
      this.navService.investmentBankingBSubject.subscribe((state) => {
        this.stateValueInverstmentsBanking = state;
      });

    // #fff
    this.subscriptionMedia = this.navService.mediaBSubject.subscribe(
      (state) => {
        this.stateValueMedia = state;
      }
    );

    // #fff
    this.subscriptionClientLogIn =
      this.navService.clientLogInBSubject.subscribe((state) => {
        this.stateValueClientLogIn = state;
      });
  }

  // #fff About Us
  showDropdownAboutUs() {
    this.navService.onShowAbout();
  }
  hideDropdownAboutUs() {
    this.navService.onHideAbout();
  }

  // #fff Research
  showDropdownResearch() {
    this.navService.onShowresearch();
  }
  hideDropdownResearch() {
    this.navService.onHideresearch();
  }

  // #fff Brokerage
  showDropdownBrokerage() {
    this.navService.onShowbrokerage();
  }
  hideDropdownBrokerage() {
    this.navService.onHidebrokerage();
  }

  // #fff Inverstments
  showDropdownInverstments() {
    this.navService.onShowinvestments();
  }
  hideDropdownInverstments() {
    this.navService.onHideinvestments();
  }

  // #fff InverstmentsBanking
  showDropdownInverstmentsBanking() {
    this.navService.onShowinvestmentBanking();
  }
  hideDropdownInverstmentsBanking() {
    this.navService.onHideinvestmentBanking();
  }

  // #fff Media
  showDropdownMedia() {
    this.navService.onShowmedia();
  }
  hideDropdownMedia() {
    this.navService.onHidemedia();
  }

  // #fff ClientLogIn
  showDropdownClientLogIn() {
    this.navService.onShowclientLogIn();
  }
  hideDropdownClientLogIn() {
    this.navService.onHideclientLogIn();
  }

  ngOnDestroy() {
    this.subscriptionAboutUs.unsubscribe();
    this.subscriptionResearch.unsubscribe();
    this.subscriptionBrokerage.unsubscribe();
    this.subscriptionInverstments.unsubscribe();
    this.subscriptionInverstmentsBanking.unsubscribe();
    this.subscriptionMedia.unsubscribe();
    this.subscriptionClientLogIn.unsubscribe();
  }
}
