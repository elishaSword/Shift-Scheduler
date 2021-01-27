import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerWeeklyViewComponent } from './manager-weekly-view.component';

describe('ManagerWeeklyViewComponent', () => {
  let component: ManagerWeeklyViewComponent;
  let fixture: ComponentFixture<ManagerWeeklyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerWeeklyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerWeeklyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
