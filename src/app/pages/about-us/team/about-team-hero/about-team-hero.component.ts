import { Component } from '@angular/core';
import { SubmitFormServiceService } from 'src/app/componenets/shared/submit-form/submit-form-service.service';

@Component({
  selector: 'app-about-team-hero',
  templateUrl: './about-team-hero.component.html',
  styleUrls: ['./about-team-hero.component.scss'],
})
export class AboutTeamHeroComponent {
  constructor(private subFromSer: SubmitFormServiceService) {}

  openSubscriptionForm() {
    this.subFromSer.toFormActiveState();
  }
}
