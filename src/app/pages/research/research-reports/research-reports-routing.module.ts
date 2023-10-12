import { NgModule } from '@angular/core';

import { RouterModule, Route } from '@angular/router';
import { ResearchReportsContentRouteItemComponent } from './research-reports-content/research-reports-content-route-item/research-reports-content-route-item.component';
import { ResearchReportsComponent } from './research-reports.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ResearchReportsComponent,
    children: [
      {
        path: ':type',
        component: ResearchReportsContentRouteItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRouterModule {}
