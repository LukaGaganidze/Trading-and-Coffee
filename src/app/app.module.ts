import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { HeaderModule } from './componenets/header/header.module';
import { SharedModule } from './componenets/shared/shared.module';
import { FooterModule } from './componenets/footer/footer.module';

import { HomePageModule } from './pages/home/home.module';
import { AbouteModule } from './pages/about-us/about.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,

    SharedModule,

    HeaderModule,
    FooterModule,

    HomePageModule,
    AppRoutingModule,

    AbouteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
