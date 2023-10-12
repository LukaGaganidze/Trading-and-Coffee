import { NgModule } from '@angular/core';

import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'research',
    redirectTo: 'research/about-research',
    pathMatch: 'full',
  },
  {
    path: 'research/about-research',
    loadChildren: () =>
      import('./research-landing/research-landing-routing.module').then(
        (mod) => mod.ResearchLandingRoutindModule
      ),
  },
  {
    path: 'research/research-reports',
    loadChildren: () =>
      import('./research-reports/research-reports-routing.module').then(
        (mod) => mod.ResearchRouterModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRouterModule {}
