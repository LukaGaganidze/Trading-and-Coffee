import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './componenets/header/header.module';
import { SharedModule } from './componenets/shared/shared.module';
import { FooterModule } from './componenets/footer/footer.module';
import { HomePageModule } from './pages/home/home.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './pages/about-us/landing-page/hero/hero.component';
import { WhatWeDoComponent } from './pages/about-us/landing-page/what-we-do/what-we-do.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, WhatWeDoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HeaderModule,
    SharedModule,
    FooterModule,
    HomePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
