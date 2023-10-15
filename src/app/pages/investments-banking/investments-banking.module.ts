import { NgModule } from '@angular/core';
import { InvestmentsBankingRoutingModule } from './investments-banking-routing.module';

import { InverstmentsBankingTransactionsModule } from './inverstments-banking-transactions/inverstments-banking-transactions.module';
import { InverstmentsBankingLandingPModule } from './inverstments-banking-landing/inverstments-banking-landing.module';

@NgModule({
  declarations: [],
  imports: [
    InvestmentsBankingRoutingModule,

    InverstmentsBankingLandingPModule,
    InverstmentsBankingTransactionsModule,
  ],
  exports: [],
})
export class InvestmentsBankingModule {}
