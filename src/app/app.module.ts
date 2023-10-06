import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { HeaderComponent } from './componenets/header/header.component';
import { PreHeadingComponent } from './componenets/header/pre-heading/pre-heading.component';
import { NavBarComponent } from './componenets/header/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './pages/home/hero/hero.component';
import { ImageSliderComponent } from './pages/home/hero/image-slider/image-slider.component';
import { HomeComponent } from './pages/home/home.component';
import { GreenButtonComponent } from './componenets/shared/green-button/green-button.component';
import { LatestReportsComponent } from './pages/home/latest-reports/latest-reports.component';
import { CardComponent } from './pages/home/latest-reports/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PreHeadingComponent,
    NavBarComponent,
    HeroComponent,
    ImageSliderComponent,
    HomeComponent,
    GreenButtonComponent,
    LatestReportsComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
