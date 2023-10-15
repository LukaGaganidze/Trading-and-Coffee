import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/componenets/shared/shared.module';
import { BrokerageLandingPageComponent } from './brokerage-landing-page.component';

@NgModule({
  declarations: [BrokerageLandingPageComponent],
  imports: [SharedModule],
  exports: [],
})
export class BrokerageLandingPageModule {}
