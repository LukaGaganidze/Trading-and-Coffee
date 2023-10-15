import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { BrokerageServiceAgreementsComponent } from './brokerage-service-agreements.component';

const routes: Route[] = [
  {
    path: '',
    component: BrokerageServiceAgreementsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrokerageServiceAgreementsRoutingModule {}
