import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreenButtonComponent } from './green-button/green-button.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { TransactionsCardComponent } from './transactions-card/transactions-card.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { PageHeroComponent } from './page-hero/page-hero.component';
import { TeamMemberCardComponent } from './team-member-card/team-member-card.component';

import { RouterModule, RouterLink } from '@angular/router';
import { AwardCardComponent } from './award-card/award-card.component';
import { ResearchCardComponent } from './research-card/research-card.component';

@NgModule({
  declarations: [
    GreenButtonComponent,
    BlogCardComponent,
    TransactionsCardComponent,
    ContactUsFormComponent,
    PageHeroComponent,
    TeamMemberCardComponent,
    AwardCardComponent,
    ResearchCardComponent,
  ],

  imports: [RouterLink, CommonModule, RouterModule],

  exports: [
    GreenButtonComponent,
    BlogCardComponent,
    TransactionsCardComponent,
    CommonModule,
    ContactUsFormComponent,
    PageHeroComponent,
    TeamMemberCardComponent,
    AwardCardComponent,
    ResearchCardComponent,
  ],
})
export class SharedModule {}
