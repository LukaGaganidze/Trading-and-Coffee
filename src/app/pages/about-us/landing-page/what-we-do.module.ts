import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/componenets/shared/shared.module';
import { AppAboutLandingPage } from './aboutLandingPage.component';

import { AboutLandingHeroComponent } from './hero/hero.component';
import { AboutWhatWeDoRoutingModule } from './what-we-do-routing.module';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

@NgModule({
  declarations: [
    AppAboutLandingPage,
    AboutLandingHeroComponent,
    WhatWeDoComponent,
  ],
  imports: [SharedModule, AboutWhatWeDoRoutingModule],
  exports: [],
})
export class AboutWahtWoDoModule {}
