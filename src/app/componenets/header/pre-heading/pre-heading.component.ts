import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pre-heading',
  templateUrl: './pre-heading.component.html',
  styleUrls: ['./pre-heading.component.scss'],
})
export class PreHeadingComponent {
  @Input() visible = true;
}
