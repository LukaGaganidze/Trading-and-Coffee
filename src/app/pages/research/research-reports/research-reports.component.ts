import { Component, OnInit } from '@angular/core';
import { SubmitFormServiceService } from 'src/app/componenets/shared/submit-form/submit-form-service.service';

@Component({
  selector: 'app-research-reports',
  templateUrl: './research-reports.component.html',
  styleUrls: ['./research-reports.component.scss'],
})
export class ResearchReportsComponent implements OnInit {
  constructor(private submitForSer: SubmitFormServiceService) {}

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enable smooth scrolling
    });
  }

  openSubscriptionForm() {
    this.submitForSer.toFormActiveState();
  }
}
