import { Component } from '@angular/core';
import { SliderItem } from './types';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  slides: SliderItem[] = [
    {
      url: '../../../../../assets/home/hero/slider-img-0.jpg',
      title: 'hero image',
      heading: 'CCT - Your Investment Opportunities',
      subHeading:
        'The world of investment possibilities with Coffee Coder Trading. We offer a wide range of investment options to help you grow your wealth and achieve your financial goals. Discover your next investment opportunity today.',
      linkTo: 'investments/about-investments',
    },
    {
      url: '../../../../../assets/home/hero/slider-img-1.jpg',
      title: 'hero image',
      heading: 'Coffee Coder Trading Team',
      subHeading:
        'Get to know the passionate individuals behind Coffee Coder Trading. Our team of experts is committed to bringing the perfect blend of coffee and trading to your fingertips. Discover the faces driving our innovative platform.',
      linkTo: '/about/our-team',
    },
    {
      url: '../../../../../assets/home/hero/slider-img-2.jpg',
      title: 'hero image',
      heading: 'Our Research Services',
      subHeading:
        'Experience the synergy of coffee and sound financial strategy through our investment banking services. At Coffee Coder Trading, we provide the tools and expertise you need to take your investments to the next level.',
      linkTo: 'research/about-research',
    },
  ];
}
