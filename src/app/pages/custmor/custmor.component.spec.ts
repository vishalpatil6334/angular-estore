import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmorComponent } from './custmor.component';

describe('CustmorComponent', () => {
  let component: CustmorComponent;
  let fixture: ComponentFixture<CustmorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustmorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
