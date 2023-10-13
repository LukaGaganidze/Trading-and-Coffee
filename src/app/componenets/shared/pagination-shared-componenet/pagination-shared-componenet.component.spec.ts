import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSharedComponenetComponent } from './pagination-shared-componenet.component';

describe('PaginationSharedComponenetComponent', () => {
  let component: PaginationSharedComponenetComponent;
  let fixture: ComponentFixture<PaginationSharedComponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationSharedComponenetComponent]
    });
    fixture = TestBed.createComponent(PaginationSharedComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
