import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/componenets/shared/shared.module';
import { InverstmentsAboutRoutingModule } from './inverstments-about-routing.module';
import { InverstmentContentItemComponent } from './inverstment-content-item/inverstment-content-item.component';
import { InverstmentsAboutComponent } from './inverstments-about.component';

@NgModule({
  declarations: [InverstmentsAboutComponent, InverstmentContentItemComponent],
  imports: [InverstmentsAboutRoutingModule, SharedModule],
  exports: [],
})
export class InverstmentsAboutModule {}
