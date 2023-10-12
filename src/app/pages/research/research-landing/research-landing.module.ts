import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/componenets/shared/shared.module';
import { ResearchLandingComponent } from './research-landing.component';

@NgModule({
  declarations: [ResearchLandingComponent],
  imports: [SharedModule],
  exports: [],
})
export class ResearchLandingModule {}
