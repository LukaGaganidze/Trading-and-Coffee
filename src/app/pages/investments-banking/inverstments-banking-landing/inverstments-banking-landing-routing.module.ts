import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { InverstmentsBankingLandingComponent } from './inverstments-banking-landing.component';

const routes: Route[] = [
  {
    path: '',
    component: InverstmentsBankingLandingComponent,
  },
];

RouterModule;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InverstmentsBankingLandingPRoutingModule {}
