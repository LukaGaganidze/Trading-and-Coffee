import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PreHeadingComponent } from './pre-heading/pre-heading.component';

@NgModule({
  declarations: [HeaderComponent, PreHeadingComponent, NavBarComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
