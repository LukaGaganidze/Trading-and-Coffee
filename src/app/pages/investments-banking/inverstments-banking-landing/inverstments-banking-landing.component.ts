import { Component, OnInit } from '@angular/core';
import { LANDING_PAGE_DATA } from '../inverstment-banking-data';

import { InverstmentLandigPage } from '../inverstment-banking-data';

@Component({
  selector: 'app-inverstments-banking-landing',
  templateUrl: './inverstments-banking-landing.component.html',
  styleUrls: ['./inverstments-banking-landing.component.scss'],
})
export class InverstmentsBankingLandingComponent implements OnInit {
  itemData: InverstmentLandigPage[] = [];

  ngOnInit(): void {
    this.itemData = LANDING_PAGE_DATA;
  }
}
