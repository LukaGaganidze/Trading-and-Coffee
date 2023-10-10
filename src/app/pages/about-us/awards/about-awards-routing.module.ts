import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AboutAwardsComponent } from './awards.component';

const routes: Route[] = [
  {
    path: '',
    component: AboutAwardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutAwardsModuleRouting {}
