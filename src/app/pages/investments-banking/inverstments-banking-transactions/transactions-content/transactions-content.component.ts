import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InvBankCard } from '../../inverstment-banking-data';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactions-content',
  templateUrl: './transactions-content.component.html',
  styleUrls: ['./transactions-content.component.scss'],
})
export class TransactionsContentComponent implements OnInit, OnDestroy {
  transacsArr: InvBankCard[] = [];

  currentPage = 1;
  itemsPerPage = 12;

  transDataSubscription!: Subscription;
  constructor(private transacSer: TransactionsService) {}

  ngOnInit(): void {
    this.transDataSubscription = this.transacSer.liveTransactionsData.subscribe(
      (arr) => {
        console.log(arr);
        this.transacsArr = arr;
      }
    );
  }

  onPageChange(e: number) {
    this.currentPage = e;
  }

  ngOnDestroy(): void {
    this.transDataSubscription.unsubscribe();
  }
}
