import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResearchType } from './researche-types';

@Injectable({
  providedIn: 'root',
})
export class ResearcheServiceService implements OnInit {
  // Original array containing all research items
  researchOriginalArray: ResearchType[] = [
    {
      title: 'Cryptocurrency Adoption Trends - June 2029',
      date: 'June 15, 2019',
      year: 2019,
      month: 'June',
      type: 'market-watch',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },

    {
      title: 'Global Economic Outlook - 2023',
      date: 'January 25, 2023',
      year: 2023,
      month: 'January',
      type: 'economy',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },

    {
      title: 'Tech Sector Innovations - March 2019',
      date: 'March 10, 2019',
      year: 2019,
      month: 'March',
      type: 'sectors',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },

    {
      title: 'Big Data in Financial Services - November 2022',
      date: 'November 18, 2022',
      year: 2022,
      month: 'November',
      type: 'companies',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Consumer Spending Patterns - July 2020',
      date: 'July 05, 2020',
      year: 2020,
      month: 'July',
      type: 'market-watch',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Green Energy Investments - February 2021',
      date: 'February 14, 2021',
      year: 2021,
      month: 'February',
      type: 'economy',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Automotive Industry Trends - May 2019',
      date: 'May 22, 2019',
      year: 2019,
      month: 'May',
      type: 'sectors',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Banking and Blockchain Technology - September 2022',
      date: 'September 30, 2022',
      year: 2022,
      month: 'September',
      type: 'companies',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Global Trade Policies - April 2023',
      date: 'April 12, 2023',
      year: 2023,
      month: 'April',
      type: 'market-watch',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Inflation and Central Banks - December 2020',
      date: 'December 19, 2020',
      year: 2020,
      month: 'December',
      type: 'economy',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Renewable Energy Market - August 2019',
      date: 'August 08, 2019',
      year: 2019,
      month: 'August',
      type: 'sectors',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Digital Banking Solutions - May 2021',
      date: 'May 27, 2021',
      year: 2021,
      month: 'May',
      type: 'companies',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Trade Tariffs and Global Markets - July 2022',
      date: 'July 14, 2022',
      year: 2022,
      month: 'July',
      type: 'market-watch',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Post-Pandemic Economic Recovery - March 2023',
      date: 'March 03, 2023',
      year: 2023,
      month: 'March',
      type: 'economy',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'AI in Finance - October 2019',
      date: 'October 20, 2019',
      year: 2019,
      month: 'October',
      type: 'sectors',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Fintech Disruptors - November 2021',
      date: 'November 09, 2021',
      year: 2021,
      month: 'November',
      type: 'companies',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Emerging Market Risks - January 2020',
      date: 'January 16, 2020',
      year: 2020,
      month: 'January',
      type: 'market-watch',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Monetary Policy Trends - December 2022',
      date: 'December 28, 2022',
      year: 2022,
      month: 'December',
      type: 'economy',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Healthcare Investment Opportunities - September 2021',
      date: 'September 05, 2021',
      year: 2021,
      month: 'September',
      type: 'sectors',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Digital Payments Revolution - February 2019',
      date: 'February 18, 2019',
      year: 2019,
      month: 'February',
      type: 'companies',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Trade War Impact on Technology - August 2020',
      date: 'August 23, 2020',
      year: 2020,
      month: 'August',
      type: 'market-watch',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Global Economic Resilience - June 2023',
      date: 'June 10, 2023',
      year: 2023,
      month: 'June',
      type: 'economy',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Agricultural Sector Challenges - April 2019',
      date: 'April 17, 2019',
      year: 2019,
      month: 'April',
      type: 'sectors',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Blockchain and Traditional Banking - May 2022',
      date: 'May 21, 2022',
      year: 2022,
      month: 'May',
      type: 'companies',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Global Supply Chain Disruptions - July 2021',
      date: 'July 03, 2021',
      year: 2021,
      month: 'July',
      type: 'market-watch',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Post-Pandemic Recovery Strategies - November 2020',
      date: 'November 12, 2020',
      year: 2020,
      month: 'November',
      type: 'economy',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
    {
      title: 'Tech Startups in Emerging Markets - March 2023',
      date: 'March 19, 2023',
      year: 2023,
      month: 'March',
      type: 'market-watch',
      pdfLink:
        'https://drive.google.com/file/d/1HzETY26i0qFp8XDOaFNtutekcSb8Pp_5/view',
      learnMoreLink: '',
    },
  ];

  latestResearchArr!: ResearchType[];

  // first 4 research items for landing page
  arrayForResearchLandingPage!: ResearchType[];

  constructor() {
    this.arrayForResearchLandingPage = this.researchOriginalArray.slice(0, 4);
  }

  ngOnInit(): void {}

  // return research array on route change on researches filter  componenet
  latestResaerchOnDynamicRouteChange(param: string) {
    let filteredResearchesArr: ResearchType[] = [];

    if (param === 'all') {
      filteredResearchesArr = this.researchOriginalArray;
    } else {
      filteredResearchesArr = this.researchOriginalArray.filter(
        (res) => res.type === param
      );
    }

    this.latestResearchArr = filteredResearchesArr;
    return filteredResearchesArr;
  }
}
