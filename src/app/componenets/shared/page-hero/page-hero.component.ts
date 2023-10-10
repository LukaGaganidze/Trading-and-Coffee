import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.component.html',
  styleUrls: ['./page-hero.component.scss'],
})
export class PageHeroComponent {
  @Input() backgrounUrl: string = '';
  @Input() buttonContent: string = '';
  @Input() inputLink: string = '';
}
