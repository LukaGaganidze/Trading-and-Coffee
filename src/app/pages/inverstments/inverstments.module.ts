import { NgModule } from '@angular/core';
import { InverstmentsRoutingModule } from './inverstments-routing.module';

import { InverstmentsAboutModule } from './inverstments-about/inverstments-about.module';
import { InverstmentsEBooksModule } from './inverstments-e-books/investments-e-books.module';

@NgModule({
  declarations: [],
  imports: [
    InverstmentsRoutingModule,

    InverstmentsEBooksModule,
    InverstmentsAboutModule,
  ],
  exports: [],
})
export class InverstmentsModule {}
