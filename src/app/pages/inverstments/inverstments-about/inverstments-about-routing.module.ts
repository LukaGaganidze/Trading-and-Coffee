import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InverstmentsAboutComponent } from './inverstments-about.component';

const routes: Route[] = [
  {
    path: '',
    component: InverstmentsAboutComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InverstmentsAboutRoutingModule {}
