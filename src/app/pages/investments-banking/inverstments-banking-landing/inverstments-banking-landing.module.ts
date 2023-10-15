import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/componenets/shared/shared.module';

import { InverstmentsBankingLandingComponent } from './inverstments-banking-landing.component';
import { InverstmentBankingLandingItemComponent } from './inverstment-banking-landing-item/inverstment-banking-landing-item.component';

@NgModule({
  declarations: [InverstmentsBankingLandingComponent, InverstmentBankingLandingItemComponent],
  imports: [SharedModule],
  exports: [],
})
export class InverstmentsBankingLandingPModule {}
