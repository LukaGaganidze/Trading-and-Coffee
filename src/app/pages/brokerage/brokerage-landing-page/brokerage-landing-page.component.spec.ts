import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerageLandingPageComponent } from './brokerage-landing-page.component';

describe('BrokerageLandingPageComponent', () => {
  let component: BrokerageLandingPageComponent;
  let fixture: ComponentFixture<BrokerageLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrokerageLandingPageComponent]
    });
    fixture = TestBed.createComponent(BrokerageLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
