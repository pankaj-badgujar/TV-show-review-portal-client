import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTileComponent } from './show-tile.component';

describe('ShowTileComponent', () => {
  let component: ShowTileComponent;
  let fixture: ComponentFixture<ShowTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
