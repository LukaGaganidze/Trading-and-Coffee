import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutAwardsComponent } from './awards.component';
import { AboutAwardsModuleRouting } from './about-awards-routing.module';
import { HeroComponent } from './hero/hero.component';
import { AllAwardsComponent } from './all-awards/all-awards.component';
import { SharedModule } from 'src/app/componenets/shared/shared.module';

@NgModule({
  declarations: [AboutAwardsComponent, HeroComponent, AllAwardsComponent],
  imports: [CommonModule, SharedModule, AboutAwardsModuleRouting],
  exports: [],
})
export class AboutAwardsModule {}
