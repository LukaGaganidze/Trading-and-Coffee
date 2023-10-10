import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppAboutLandingPage } from './aboutLandingPage.component';

const routes: Route[] = [
  { path: '', component: AppAboutLandingPage },
  { path: 'what-we-do', component: AppAboutLandingPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutWhatWeDoRoutingModule {}
