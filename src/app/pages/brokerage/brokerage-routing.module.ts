import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'about-brokerage',
    pathMatch: 'full',
  },
  {
    path: 'about-brokerage',
    loadChildren: () =>
      import(
        './brokerage-landing-page/brokerage-landing-page-routing.module'
      ).then((mod) => mod.BrokerageLandingPageRoutingModule),
  },
  {
    path: 'brokerage-services-agreements',
    loadChildren: () =>
      import(
        './brokerage-service-agreements/brokerage-service-agreements-routing.module'
      ).then((mod) => mod.BrokerageServiceAgreementsRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrokerageRoutingModule {}
