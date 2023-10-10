import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // LANDING PAGE
  { path: '', component: HomeComponent },

  // ABOUT PAGE LAZY LOADED
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about-us/about.module').then((mod) => mod.AbouteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
