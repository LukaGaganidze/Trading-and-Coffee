import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-controls',
  templateUrl: './transaction-controls.component.html',
  styleUrls: ['./transaction-controls.component.scss'],
})
export class TransactionControlsComponent implements OnInit, OnDestroy {
  constructor(private transactionSer: TransactionsService) {}

  ngOnInit(): void {}

  filterTransactions(e: Event) {
    this.transactionSer.reactToYearSelect(
      (e.target as HTMLSelectElement).value
    );
  }

  ngOnDestroy(): void {}
}
