import { Component } from '@angular/core';
import { CardItem } from './types';

@Component({
  selector: 'app-latest-reports',
  templateUrl: './latest-reports.component.html',
  styleUrls: ['./latest-reports.component.scss'],
})
export class LatestReportsComponent {
  cardsArray: CardItem[] = [
    {
      subHeading: 'Market Watch',
      heading: 'Weekly Market Watch',
      date: 'october 02, 2023',
      linkToEnglish: '#',
      linkToGeorgian: '#',
      learnmoreLink: '#',
    },
    {
      subHeading: 'Research Reports',
      heading: 'Commodities Monthly Outlook - September 2023',
      date: 'october 04, 2023',
      linkToEnglish: '#',
      linkToGeorgian: '#',
      learnmoreLink: '#',
    },
    {
      subHeading: 'Research Reports',
      heading: 'Regional Fixed Income Market Watch, September 2023',
      date: 'october 04, 2023',
      linkToEnglish: '#',
      linkToGeorgian: '#',
      learnmoreLink: '#',
    },
    {
      subHeading: 'Research Reports',
      heading: 'Monthly Economic Review - Fiscal Consolidation Continues',
      date: 'october 02, 2023',
      linkToEnglish: '#',
      linkToGeorgian: '#',
      learnmoreLink: '#',
    },
  ];
}
