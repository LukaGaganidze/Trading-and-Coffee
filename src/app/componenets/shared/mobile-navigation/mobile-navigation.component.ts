import { Component, OnInit } from '@angular/core';
import { SubmitFormServiceService } from '../submit-form/submit-form-service.service';
import { MobileNavService } from './mobile-nav.service';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss'],
})
export class MobileNavigationComponent implements OnInit {
  // nav state
  mobileNavState = false;

  // link states
  subNavaboutusActive = false;
  subNavresearchActive = false;
  subNavbrokerageActive = false;
  subNavinverstmentsActive = false;
  subNavinverstmentbankingActive = false;

  constructor(
    private mobileNavSer: MobileNavService,
    private formSubSer: SubmitFormServiceService
  ) {}

  ngOnInit(): void {
    this.mobileNavSer.navigationState.subscribe(
      (state: boolean) => (this.mobileNavState = state)
    );
  }

  closeNav() {
    this.mobileNavSer.deActivateNavigation();

    this.subNavresearchActive = false;
    this.subNavaboutusActive = false;
    this.subNavbrokerageActive = false;
    this.subNavinverstmentsActive = false;
    this.subNavinverstmentbankingActive = false;
  }

  activateSubNav(exactNav: string) {
    if (exactNav === 'aboutus') {
      this.subNavaboutusActive = !this.subNavaboutusActive;

      this.subNavresearchActive = false;
      this.subNavbrokerageActive = false;
      this.subNavinverstmentsActive = false;
      this.subNavinverstmentbankingActive = false;
    }
    if (exactNav === 'research') {
      this.subNavresearchActive = !this.subNavresearchActive;

      this.subNavaboutusActive = false;
      this.subNavbrokerageActive = false;
      this.subNavinverstmentsActive = false;
      this.subNavinverstmentbankingActive = false;
    }
    if (exactNav === 'brokerage') {
      this.subNavbrokerageActive = !this.subNavbrokerageActive;

      this.subNavaboutusActive = false;
      this.subNavaboutusActive = false;
      this.subNavinverstmentsActive = false;
      this.subNavinverstmentbankingActive = false;
    }
    if (exactNav === 'inverstments') {
      this.subNavinverstmentsActive = !this.subNavinverstmentsActive;

      this.subNavresearchActive = false;
      this.subNavbrokerageActive = false;
      this.subNavaboutusActive = false;
      this.subNavinverstmentbankingActive = false;
    }
    if (exactNav === 'inverstmentbanking') {
      this.subNavinverstmentbankingActive =
        !this.subNavinverstmentbankingActive;

      this.subNavresearchActive = false;
      this.subNavbrokerageActive = false;
      this.subNavinverstmentsActive = false;
      this.subNavaboutusActive = false;
    }
  }

  switchToSbmitForm() {
    this.mobileNavSer.deActivateNavigation();
    this.formSubSer.toFormActiveState();
  }
}
