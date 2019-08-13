import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisPreviouslySubmittedComponent } from './analysis-previously-submitted.component';

describe('AnalysisPreviouslySubmittedComponent', () => {
  let component: AnalysisPreviouslySubmittedComponent;
  let fixture: ComponentFixture<AnalysisPreviouslySubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisPreviouslySubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisPreviouslySubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
