import { Component, Input } from '@angular/core';
import { BlogCard } from 'src/app/pages/home/latest-blog/types';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() blogItem!: BlogCard;
}
