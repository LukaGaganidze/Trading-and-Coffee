import { Component } from '@angular/core';
import { SubmitFormServiceService } from 'src/app/componenets/shared/submit-form/submit-form-service.service';

@Component({
  selector: 'about-landing-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class AboutLandingHeroComponent {
  constructor(private subFromSer: SubmitFormServiceService) {}

  openSubscriptionForm() {
    this.subFromSer.toFormActiveState();
  }
}
