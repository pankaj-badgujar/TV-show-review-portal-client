import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGenresComponent } from './show-genres.component';

describe('ShowGenresComponent', () => {
  let component: ShowGenresComponent;
  let fixture: ComponentFixture<ShowGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
