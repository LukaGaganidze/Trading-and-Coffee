import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/componenets/shared/shared.module';
import { InverstmentsEBooksComponent } from './inverstments-e-books.component';

import { InverstmentsEBooksRoutingModule } from './investments-e-books-routing.module';
import { EBookItemComponent } from './e-book-item/e-book-item.component';
import { ItemsControlComponent } from './items-control/items-control.component';
import { EBookPageComponent } from './e-book-page/e-book-page.component';

@NgModule({
  declarations: [InverstmentsEBooksComponent, EBookItemComponent, ItemsControlComponent, EBookPageComponent],
  imports: [InverstmentsEBooksRoutingModule, SharedModule],
  exports: [],
})
export class InverstmentsEBooksModule {}
