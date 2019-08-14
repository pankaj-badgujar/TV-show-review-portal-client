import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedShowTileComponent } from './saved-show-tile.component';

describe('SavedShowTileComponent', () => {
  let component: SavedShowTileComponent;
  let fixture: ComponentFixture<SavedShowTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedShowTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedShowTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
