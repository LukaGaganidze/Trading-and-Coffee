import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/componenets/shared/shared.module';

import { HeroComponent } from './hero/hero.component';
import { ImageSliderComponent } from './hero/image-slider/image-slider.component';
import { HomeComponent } from './home.component';
import { LatestBlogComponent } from './latest-blog/latest-blog.component';
import { CardComponent } from './latest-reports/card/card.component';
import { LatestReportsComponent } from './latest-reports/latest-reports.component';
import { LatestTransactionsComponent } from './latest-transactions/latest-transactions.component';

import { OurServicesComponent } from './our-services/our-services.component';
import { TraderInfoComponent } from './trader-info/trader-info.component';

@NgModule({
  declarations: [
    //home page componenets
    HomeComponent,
    // home page - hero section
    HeroComponent,
    ImageSliderComponent,
    // latest reports section
    LatestReportsComponent,
    // our services section
    OurServicesComponent,
    CardComponent,
    // trader inpo section
    TraderInfoComponent,
    // latest blog section
    LatestBlogComponent,
    // latest transactions section
    LatestTransactionsComponent,
  ],
  imports: [SharedModule, RouterModule],
  exports: [HomeComponent],
})
export class HomePageModule {}
