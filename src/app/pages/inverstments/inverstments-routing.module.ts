import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'about-investments',
    pathMatch: 'full',
  },
  {
    path: 'about-investments',
    loadChildren: () =>
      import('./inverstments-about/inverstments-about-routing.module').then(
        (mod) => mod.InverstmentsAboutRoutingModule
      ),
  },
  {
    path: 'e-books',
    loadChildren: () =>
      import('./inverstments-e-books/investments-e-books-routing.module').then(
        (mod) => mod.InverstmentsEBooksRoutingModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InverstmentsRoutingModule {}
