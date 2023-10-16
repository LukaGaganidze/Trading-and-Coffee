import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutTeamModule } from './team/about-team.module';
import { AboutWahtWoDoModule } from './landing-page/what-we-do.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutAwardsModule } from './awards/about-awards.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AboutRoutingModule,

    AboutWahtWoDoModule,
    AboutTeamModule,
    AboutAwardsModule,
  ],
  exports: [],
})
export class AbouteModule {}
