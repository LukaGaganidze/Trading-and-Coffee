import { NgModule } from '@angular/core';

import { RouterModule, Route } from '@angular/router';
import { BrokerageLandingPageComponent } from './brokerage-landing-page.component';

const routes: Route[] = [
  {
    path: '',
    component: BrokerageLandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrokerageLandingPageRoutingModule {}
