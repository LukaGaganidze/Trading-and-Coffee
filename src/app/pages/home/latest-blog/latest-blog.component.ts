import { Component } from '@angular/core';

import { BlogCard } from './types';

@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.scss'],
})
export class LatestBlogComponent {
  blogCardArray: BlogCard[] = [
    {
      imgURL: '../../../../assets/home/blog/img1.jpg',
      header: 'Oil prices climbed their highest level in nine months',
      date: '13 Sep 2023',
      link: '#',
    },
    {
      imgURL: '../../../../assets/home/blog/img2.jpg',
      header: 'Salesforce Surges on Earnings Beat and Upbeat Forecast',
      date: '04 Sep 2023',
      link: '#',
    },
    {
      imgURL: '../../../../assets/home/blog/img3.jpg',
      header: "Nvidia's stock surged to a new record high",
      date: '29 Aug 2023',
      link: '#',
    },
    {
      imgURL: '../../../../assets/home/blog/img4.jpg',
      header: 'Disney stock rises on earnings',
      date: '15 Aug 2023',
      link: '#',
    },
  ];
}
