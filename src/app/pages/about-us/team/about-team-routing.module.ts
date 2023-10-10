import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { TeamComponent } from './team.component';

const routes: Route[] = [{ path: '', component: TeamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutTeamModuleRouting {}
