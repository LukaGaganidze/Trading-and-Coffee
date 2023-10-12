import { NgModule } from '@angular/core';

import { RouterModule, Route } from '@angular/router';
import { ResearchLandingComponent } from './research-landing.component';

const routes: Route[] = [
  {
    path: '',
    component: ResearchLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchLandingRoutindModule {}
