import { NgModule } from '@angular/core';

import { BrokerageRoutingModule } from './brokerage-routing.module';

import { BrokerageLandingPageModule } from './brokerage-landing-page/brokerage-landing-page.module';
import { BrokerageServiceAgreementsModule } from './brokerage-service-agreements/brokerage-service-agreements.module';

@NgModule({
  declarations: [],
  imports: [
    BrokerageRoutingModule,

    BrokerageLandingPageModule,
    BrokerageServiceAgreementsModule,
  ],
  exports: [],
})
export class BrokerageModule {}
