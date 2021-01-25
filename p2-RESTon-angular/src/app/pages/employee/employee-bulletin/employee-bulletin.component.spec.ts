import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBulletinComponent } from './employee-bulletin.component';

describe('EmployeeBulletinComponent', () => {
  let component: EmployeeBulletinComponent;
  let fixture: ComponentFixture<EmployeeBulletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBulletinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
