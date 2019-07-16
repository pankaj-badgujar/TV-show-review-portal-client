import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailViewerComponent } from './show-detail-viewer.component';

describe('ShowDetailViewerComponent', () => {
  let component: ShowDetailViewerComponent;
  let fixture: ComponentFixture<ShowDetailViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
