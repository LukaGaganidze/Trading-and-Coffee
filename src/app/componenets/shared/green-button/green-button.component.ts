import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss'],
})
export class GreenButtonComponent {
  @Input() content: string = '';
  @Input() linkTo: string = '';
}
