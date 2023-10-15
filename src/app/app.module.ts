import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { HeaderModule } from './componenets/header/header.module';
import { SharedModule } from './componenets/shared/shared.module';
import { FooterModule } from './componenets/footer/footer.module';

import { HomePageModule } from './pages/home/home.module';
import { AbouteModule } from './pages/about-us/about.module';
import { ResearchPageModule } from './pages/research/research.module';

import { AppComponent } from './app.component';
import { BrokerageModule } from './pages/brokerage/brokerage.module';
import { InverstmentsModule } from './pages/inverstments/inverstments.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,

    SharedModule,

    HeaderModule,
    FooterModule,

    AppRoutingModule,

    HomePageModule,
    AbouteModule,
    ResearchPageModule,
    BrokerageModule,
    InverstmentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
