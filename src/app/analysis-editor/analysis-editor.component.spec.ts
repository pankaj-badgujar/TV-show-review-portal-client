import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisEditorComponent } from './analysis-editor.component';

describe('AnalysisEditorComponent', () => {
  let component: AnalysisEditorComponent;
  let fixture: ComponentFixture<AnalysisEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
