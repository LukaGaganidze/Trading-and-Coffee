import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss'],
})
export class TeamMemberCardComponent {
  @Input() imgURL = '';
  @Input() name = '';
  @Input() title = '';
  @Input() mail = '';
  @Input() phone = '';
}
