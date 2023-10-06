import { Component, Input } from '@angular/core';

import { TransactionsCard } from '../../../pages/home/latest-transactions/types';

@Component({
  selector: 'app-transactions-card',
  templateUrl: './transactions-card.component.html',
  styleUrls: ['./transactions-card.component.scss'],
})
export class TransactionsCardComponent {
  @Input() transactionCardData!: TransactionsCard;
}
