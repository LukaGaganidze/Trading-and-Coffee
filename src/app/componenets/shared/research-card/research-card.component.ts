import { Component, Input } from '@angular/core';
import { ResearchType } from 'src/app/pages/research/researche-types';

@Component({
  selector: 'app-research-card',
  templateUrl: './research-card.component.html',
  styleUrls: ['./research-card.component.scss'],
})
export class ResearchCardComponent {
  @Input() researchItem!: ResearchType;
}
