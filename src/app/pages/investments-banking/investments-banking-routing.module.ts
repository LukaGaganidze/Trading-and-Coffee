import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'about-investments-banking',
    pathMatch: 'full',
  },
  {
    path: 'about-investments-banking',
    loadChildren: () =>
      import(
        './inverstments-banking-landing/inverstments-banking-landing-routing.module'
      ).then((mod) => mod.InverstmentsBankingLandingPRoutingModule),
  },
  {
    path: 'investments-banking-transactions',
    loadChildren: () =>
      import(
        './inverstments-banking-transactions/inverstments-banking-transactions-routing.module'
      ).then((mod) => mod.InverstmentsBankingTransactionsRoutingModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class InvestmentsBankingRoutingModule {}
