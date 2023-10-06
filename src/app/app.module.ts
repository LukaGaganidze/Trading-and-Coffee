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
import { OurServicesComponent } from './pages/home/our-services/our-services.component';
import { TraderInfoComponent } from './pages/home/trader-info/trader-info.component';
import { LatestBlogComponent } from './pages/home/latest-blog/latest-blog.component';
import { BlogCardComponent } from './componenets/shared/blog-card/blog-card.component';
import { TransactionsCardComponent } from './componenets/shared/transactions-card/transactions-card.component';
import { LatestTransactionsComponent } from './pages/home/latest-transactions/latest-transactions.component';

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
    OurServicesComponent,
    TraderInfoComponent,
    LatestBlogComponent,
    BlogCardComponent,
    TransactionsCardComponent,
    LatestTransactionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
