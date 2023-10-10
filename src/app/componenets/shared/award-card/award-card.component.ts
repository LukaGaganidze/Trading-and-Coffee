import { Component, Input } from '@angular/core';
import { AwardTypes } from 'src/app/pages/about-us/awards/all-awards/awar-types';

@Component({
  selector: 'app-award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss'],
})
export class AwardCardComponent {
  @Input() award!: AwardTypes;
}
