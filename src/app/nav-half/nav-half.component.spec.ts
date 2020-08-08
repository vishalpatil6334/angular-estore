import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHalfComponent } from './nav-half.component';

describe('NavHalfComponent', () => {
  let component: NavHalfComponent;
  let fixture: ComponentFixture<NavHalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
