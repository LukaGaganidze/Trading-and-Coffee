import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/componenets/shared/shared.module';
import { BrokerageServiceAgreementsRoutingModule } from './brokerage-service-agreements-routing.module';

import { BrokerageServiceAgreementsComponent } from './brokerage-service-agreements.component';

@NgModule({
  declarations: [BrokerageServiceAgreementsComponent],
  imports: [SharedModule, BrokerageServiceAgreementsRoutingModule],
  exports: [],
})
export class BrokerageServiceAgreementsModule {}
