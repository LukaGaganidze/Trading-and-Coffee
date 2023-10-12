import { Component, OnInit } from '@angular/core';

import { ResearcheServiceService } from '../researche-service.service';
import { ResearchType } from '../researche-types';

import { Router } from '@angular/router';

@Component({
  selector: 'app-research-landing',
  templateUrl: './research-landing.component.html',
  styleUrls: ['./research-landing.component.scss'],
})
export class ResearchLandingComponent implements OnInit {
  researchArray: ResearchType[] = [];

  constructor(
    private resService: ResearcheServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.researchArray = this.resService.arrayForResearchLandingPage;
  }

  onNavigateToReports() {
    this.router.navigate(['research', 'research-reports']);
  }
}
