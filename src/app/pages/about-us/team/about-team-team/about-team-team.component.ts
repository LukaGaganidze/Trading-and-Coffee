import { Component, OnInit } from '@angular/core';
import { AboutTeamServiceService } from './about-team-service.service';

import { TeamMemeber } from './about-team-types';

@Component({
  selector: 'app-about-team-team',
  templateUrl: './about-team-team.component.html',
  styleUrls: ['./about-team-team.component.scss'],
})
export class AboutTeamTeamComponent implements OnInit {
  ourTeam: TeamMemeber[] = [];

  constructor(private teamService: AboutTeamServiceService) {}

  ngOnInit(): void {
    this.teamService.chosenCategorySubject.subscribe(
      (currentTeam: TeamMemeber[]) => {
        this.ourTeam = currentTeam;
      }
    );
  }

  onSelectChage(e: Event) {
    const chosenCategory = (e.target as HTMLSelectElement).value;

    this.teamService.updateTeam(chosenCategory);
  }
}
