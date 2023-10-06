import { Component } from '@angular/core';
import { TransactionsCard } from './types';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss'],
})
export class LatestTransactionsComponent {
  cardsArray: TransactionsCard[] = [
    {
      img: '../../../../assets/home/transactions/img1.jpg',
      amount: 'USD 20 000 000',
      percent: '8.50%, 2-Year Brand',
      type: 'Public Placement',
      date: '14 Sep 2023',
    },
    {
      img: '../../../../assets/home/transactions/img2.jpg',
      amount: 'USD 10 000 000',
      percent: '8%, 2-Year Brand',
      type: 'Public Placement',
      date: '15 Nov 2023',
    },
    {
      img: '../../../../assets/home/transactions/img3.jpg',
      amount: 'USD 50 000 000',
      percent: '8.50%, 1-Year Brand',
      type: 'Public Placement',
      date: '11 Sep 2023',
    },
    {
      img: '../../../../assets/home/transactions/img4.jpg',
      amount: 'USD 10 000 000',
      percent: '8.50%, 2-Year Brand',
      type: 'Public Placement',
      date: '01 Jan 2022',
    },
    {
      img: '../../../../assets/home/transactions/img5.jpg',
      amount: 'USD 15 000 000',
      percent: '8.50%, 3-Year Brand',
      type: 'Public Placement',
      date: '25 Mar 2023',
    },
  ];
}
