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
      heading: 'GT native trading app has been updated',
      subHeading:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vel nesciunt quae labore commodi. Voluptatum nesciunt natus nemo modi alias',
      linkTo: '#',
    },
    {
      url: '../../../../../assets/home/hero/slider-img-1.jpg',
      title: 'hero image',
      heading: 'The best investment bank in Georgia',
      subHeading:
        'Lorem ipsum dolor sit  consectetur adipisicing elit. Esse vel nesciunt quae labore commodi.  nesciunt natus nemo modi alias',
      linkTo: '#',
    },
    {
      url: '../../../../../assets/home/hero/slider-img-2.jpg',
      title: 'hero image',
      heading: 'With us inversting is accessable for everyone ',
      subHeading:
        'Lorem ipsum dolor sit amet consectetur  elit. Esse vel nesciunt quae labore commodi. nesciunt natus nemo modi ',
      linkTo: '#',
    },
  ];
}
