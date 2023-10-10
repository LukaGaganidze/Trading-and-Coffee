import { Injectable } from '@angular/core';
import { TeamMemeber } from './about-team-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutTeamServiceService {
  private teamData: TeamMemeber[] = [
    // #FFF MANAGEMENT
    {
      name: 'John Smith',
      position: 'General Director',
      email: 'john.smith@gmail.com',
      phone: '(557) 123-4567',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/management/management-male.png',
      category: 'management',
    },
    {
      name: 'Sarah Johnson',
      position: 'Head of Research',
      email: 'sarah.johnson@gmail.com',
      phone: '(555) 987-6543',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/management/management-female.png',
      category: 'management',
    },
    {
      name: 'Michael Brown',
      position: 'Head of Brokerage',
      email: 'michael.brown@gmail.com',
      phone: '(551) 567-8901',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/management/management-male.png',
      category: 'management',
    },
    {
      name: 'Emily Davis',
      position: 'Head of Advisory, IB',
      email: 'emily.davis@gmail.com',
      phone: '(555) 234-5678',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/management/management-female.png',
      category: 'management',
    },
    {
      name: 'Jennifer Lee',
      position: 'Deputy Head of Capital Markets',
      email: 'jennifer.lee@gmail.com',
      phone: '(555) 345-6789',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/management/management-female.png',
      category: 'management',
    },
    {
      name: 'Robert Wilson',
      position: 'Head of Capital Markets',
      email: 'robert.wilson@gmail.com',
      phone: '(571) 789-0123',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/management/management-male.png',
      category: 'management',
    },
    // #fff RESEARCH
    {
      name: 'John Smith',
      position: 'Head of Reasearch',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'research',
    },
    {
      name: 'Sarah Johnson',
      position: 'Head of Macroeconomic Analysis and Forecasting',
      email: 'sarah.johnson@example.com',
      phone: '(555) 987-6543',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'research',
    },
    {
      name: 'Michael Brown',
      position: 'Head of Analytics',
      email: 'michael.brown@example.com',
      phone: '(555) 567-8901',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'research',
    },
    {
      name: 'Emily Davis',
      position: 'Head of Sector Research',
      email: 'emily.davis@example.com',
      phone: '(555) 234-5678',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'research',
    },
    {
      name: 'Robert Wilson',
      position: 'Head of Sector',
      email: 'robert.wilson@example.com',
      phone: '(555) 789-0123',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'research',
    },
    {
      name: 'Jennifer Lee',
      position: 'Senior Equity Analyst',
      email: 'jennifer.lee@example.com',
      phone: '(555) 345-6789',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'research',
    },
    {
      name: 'Alice Thompson',
      position: 'Analyst',
      email: 'alice.thompson@example.com',
      phone: '(555) 111-2222',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'research',
    },
    {
      name: 'Ethan Clark',
      position: 'Analyst',
      email: 'ethan.clark@example.com',
      phone: '(555) 333-4444',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'research',
    },
    {
      name: 'Olivia Harris',
      position: 'Analyst',
      email: 'olivia.harris@example.com',
      phone: '(555) 555-6666',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'research',
    },
    {
      name: 'Liam Davis',
      position: 'Analyst',
      email: 'liam.davis@example.com',
      phone: '(555) 777-8888',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'research',
    },
    {
      name: 'Ava Wilson',
      position: 'Analyst',
      email: 'ava.wilson@example.com',
      phone: '(555) 999-0000',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'research',
    },
    {
      name: 'Noah Martin',
      position: 'Analyst',
      email: 'noah.martin@example.com',
      phone: '(555) 123-9876',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'research',
    },
    // #fff brokerage
    {
      name: 'Alice Thompson',
      position: 'Head of Brokerage',
      email: 'alice.thompson@example.com',
      phone: '(555) 111-2222',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'brokerage',
    },
    {
      name: 'Ethan Clark',
      position: 'Head of Execution Brokerage',
      email: 'ethan.clark@example.com',
      phone: '(555) 333-4444',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'brokerage',
    },
    {
      name: 'Olivia Harris',
      position: 'Senior Associate - Sales',
      email: 'olivia.harris@example.com',
      phone: '(555) 555-6666',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'brokerage',
    },
    {
      name: 'Liam Davis',
      position: 'Associate –Execution Brokerage',
      email: 'liam.davis@example.com',
      phone: '(555) 777-8888',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'brokerage',
    },
    {
      name: 'Ava Wilson',
      position: 'Associate –Execution Brokerage',
      email: 'ava.wilson@example.com',
      phone: '(555) 999-0000',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'brokerage',
    },
    {
      name: 'Noah Martin',
      position: 'Associate –Execution Brokerage',
      email: 'noah.martin@example.com',
      phone: '(555) 123-9876',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'brokerage',
    },
    {
      name: 'Sophia Baker',
      position: 'Associate –Execution Brokerage',
      email: 'sophia.baker@example.com',
      phone: '(555) 987-6543',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'brokerage',
    },
    {
      name: 'Mason Turner',
      position: 'Associate –Execution Brokerage',
      email: 'mason.turner@example.com',
      phone: '(555) 234-5678',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'brokerage',
    },
    {
      name: 'Olivia Adams',
      position: 'Associate –Execution Brokerage',
      email: 'olivia.adams@example.com',
      phone: '(555) 789-0123',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'brokerage',
    },
    {
      name: 'William Scott',
      position: 'Associate –Execution Brokerage',
      email: 'william.scott@example.com',
      phone: '(555) 345-6789',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-male.png',
      category: 'brokerage',
    },
    // #fff Investment Banking
    {
      name: 'Kim Lin',
      position: 'Head of Advisory, IB',
      email: 'kim.lim@mail.com',
      phone: '(555) 272-3799',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/inverstment-banking/inverstment-banking-female.png',
      category: 'investments',
    },
    {
      name: 'Anna Davis',
      position: 'Associate Investment Banker',
      email: 'liam.davis@example.com',
      phone: '(555) 211-2321',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/inverstment-banking/inverstment-banking-female-2.png',
      category: 'investments',
    },
    {
      name: 'Chloe Peterson',
      position: 'Investment Analyst',
      email: 'chloe.peterson@example.com',
      phone: '(555) 233-5467',
      imgUrl:
        '../../../../assets/about/our-team/worker-placeholders/brokrage/brokerage-female.png',
      category: 'investments',
    },
  ];
  constructor() {}

  chosenCategorySubject = new BehaviorSubject<TeamMemeber[]>(
    this.getManagement()
  );

  // initial state
  getManagement(): TeamMemeber[] {
    return this.teamData.filter((member) => member.category === 'management');
  }

  // update on selection change
  updateTeam(selectBy: string) {
    const selectedTeam: TeamMemeber[] = this.teamData.filter(
      (member) => member.category === selectBy
    );

    this.chosenCategorySubject.next(selectedTeam);
  }
}
