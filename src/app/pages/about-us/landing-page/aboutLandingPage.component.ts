import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-landingPage',
  templateUrl: './aboutLandingPage.component.html',
  styleUrls: ['./aboutLandingPage.component.scss'],
})
export class AppAboutLandingPage implements OnInit {
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enable smooth scrolling
    });
  }
}
