import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavTwoComponent } from './sidenav-two.component';

describe('SidenavTwoComponent', () => {
  let component: SidenavTwoComponent;
  let fixture: ComponentFixture<SidenavTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
