import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/componenets/shared/shared.module';

import { TeamComponent } from './team.component';
import { AboutTeamHeroComponent } from './about-team-hero/about-team-hero.component';
import { AboutTeamTeamComponent } from './about-team-team/about-team-team.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TeamComponent, AboutTeamHeroComponent, AboutTeamTeamComponent],
  imports: [SharedModule, FormsModule],
  exports: [],
})
export class AboutTeamModule {}
