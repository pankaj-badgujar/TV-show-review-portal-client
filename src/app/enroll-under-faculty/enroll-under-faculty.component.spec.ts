import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollUnderFacultyComponent } from './enroll-under-faculty.component';

describe('EnrollUnderFacultyComponent', () => {
  let component: EnrollUnderFacultyComponent;
  let fixture: ComponentFixture<EnrollUnderFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollUnderFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollUnderFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
