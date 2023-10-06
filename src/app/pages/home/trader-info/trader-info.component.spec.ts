import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderInfoComponent } from './trader-info.component';

describe('TraderInfoComponent', () => {
  let component: TraderInfoComponent;
  let fixture: ComponentFixture<TraderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraderInfoComponent]
    });
    fixture = TestBed.createComponent(TraderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
