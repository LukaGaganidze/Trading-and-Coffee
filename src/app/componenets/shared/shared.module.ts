import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreenButtonComponent } from './green-button/green-button.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { TransactionsCardComponent } from './transactions-card/transactions-card.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';

@NgModule({
  declarations: [
    GreenButtonComponent,
    BlogCardComponent,
    TransactionsCardComponent,
    ContactUsFormComponent,
  ],

  imports: [],

  exports: [
    GreenButtonComponent,
    BlogCardComponent,
    TransactionsCardComponent,
    CommonModule,
    ContactUsFormComponent,
  ],
})
export class SharedModule {}
