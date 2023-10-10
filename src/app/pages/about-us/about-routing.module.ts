import { NgModule } from '@angular/core';

import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  // lazy loading sub routes
  // what we do
  { path: '', redirectTo: 'what-we-do', pathMatch: 'full' },
  {
    path: 'what-we-do',
    loadChildren: () =>
      import('./landing-page/what-we-do-routing.module').then(
        (mod) => mod.AboutWhatWeDoRoutingModule
      ),
  },

  // our team
  {
    path: 'our-team',
    loadChildren: () =>
      import('./team/about-team-routing.module').then(
        (mod) => mod.AboutTeamModuleRouting
      ),
  },

  // awards
  {
    path: 'awards',
    loadChildren: () =>
      import('./awards/about-awards-routing.module').then(
        (mod) => mod.AboutAwardsModuleRouting
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
