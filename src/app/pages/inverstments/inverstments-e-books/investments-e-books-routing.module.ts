import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InverstmentsEBooksComponent } from './inverstments-e-books.component';
import { EBookPageComponent } from './e-book-page/e-book-page.component';
import { EBookGPageGueard } from './e-book-page/e-book-page.guard';

const routes: Route[] = [
  {
    path: '',
    component: InverstmentsEBooksComponent,
  },
  {
    path: ':eBook',
    component: EBookPageComponent,
    canActivate: [EBookGPageGueard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InverstmentsEBooksRoutingModule {}
