import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brokerage-landing-page',
  templateUrl: './brokerage-landing-page.component.html',
  styleUrls: ['./brokerage-landing-page.component.scss'],
})
export class BrokerageLandingPageComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enable smooth scrolling
    });
  }
}
