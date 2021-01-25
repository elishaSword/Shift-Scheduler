import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyEnrollsComponent } from './weekly-enrolls.component';

describe('WeeklyEnrollsComponent', () => {
  let component: WeeklyEnrollsComponent;
  let fixture: ComponentFixture<WeeklyEnrollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyEnrollsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyEnrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
