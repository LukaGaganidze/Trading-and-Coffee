import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberCardComponent } from './team-member-card.component';

describe('TeamMemberCardComponent', () => {
  let component: TeamMemberCardComponent;
  let fixture: ComponentFixture<TeamMemberCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMemberCardComponent]
    });
    fixture = TestBed.createComponent(TeamMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
