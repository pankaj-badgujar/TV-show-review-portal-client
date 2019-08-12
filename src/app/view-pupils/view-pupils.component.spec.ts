import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPupilsComponent } from './view-pupils.component';

describe('ViewPupilsComponent', () => {
  let component: ViewPupilsComponent;
  let fixture: ComponentFixture<ViewPupilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPupilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPupilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
