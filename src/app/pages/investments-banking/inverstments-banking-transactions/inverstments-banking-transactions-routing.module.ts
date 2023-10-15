import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { InverstmentsBankingTransactionsComponent } from './inverstments-banking-transactions.component';

const routes: Route[] = [
  {
    path: '',
    component: InverstmentsBankingTransactionsComponent,
  },
];

RouterModule;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InverstmentsBankingTransactionsRoutingModule {}
