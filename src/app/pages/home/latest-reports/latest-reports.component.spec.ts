import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReportsComponent } from './latest-reports.component';

describe('LatestReportsComponent', () => {
  let component: LatestReportsComponent;
  let fixture: ComponentFixture<LatestReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestReportsComponent]
    });
    fixture = TestBed.createComponent(LatestReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
