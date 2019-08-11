import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutScreenComponent } from './logout-screen.component';

describe('LogoutScreenComponent', () => {
  let component: LogoutScreenComponent;
  let fixture: ComponentFixture<LogoutScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
