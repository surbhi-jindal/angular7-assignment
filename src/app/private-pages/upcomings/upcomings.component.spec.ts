import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingsComponent } from './upcomings.component';

describe('UpcomingsComponent', () => {
  let component: UpcomingsComponent;
  let fixture: ComponentFixture<UpcomingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
