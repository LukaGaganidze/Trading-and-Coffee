import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
  InvBankCard,
  INVESTMENT_BANKING_CARD_DATA,
} from '../inverstment-banking-data';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  originalTransactionsData: InvBankCard[] = INVESTMENT_BANKING_CARD_DATA;
  liveTransactionsData = new BehaviorSubject(this.originalTransactionsData);

  constructor() {}

  reactToYearSelect(year: string) {
    if (year === 'all') {
      this.liveTransactionsData.next(this.originalTransactionsData);
    } else {
      this.liveTransactionsData.next(
        this.originalTransactionsData.filter((item) => +item.year === +year)
      );
    }
  }
}
