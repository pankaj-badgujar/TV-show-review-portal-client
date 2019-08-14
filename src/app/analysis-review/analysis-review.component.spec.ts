import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisReviewComponent } from './analysis-review.component';

describe('AnalysisReviewComponent', () => {
  let component: AnalysisReviewComponent;
  let fixture: ComponentFixture<AnalysisReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
