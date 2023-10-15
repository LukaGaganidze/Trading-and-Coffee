import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/componenets/shared/shared.module';

import { InverstmentsBankingTransactionsComponent } from './inverstments-banking-transactions.component';
import { TransactionControlsComponent } from './transaction-controls/transaction-controls.component';
import { TransactionsContentComponent } from './transactions-content/transactions-content.component';

@NgModule({
  declarations: [InverstmentsBankingTransactionsComponent, TransactionControlsComponent, TransactionsContentComponent],
  imports: [SharedModule],
  exports: [],
})
export class InverstmentsBankingTransactionsModule {}
