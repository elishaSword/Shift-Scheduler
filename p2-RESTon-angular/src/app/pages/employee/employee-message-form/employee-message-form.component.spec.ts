import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMessageFormComponent } from './employee-message-form.component';

describe('EmployeeMessageFormComponent', () => {
  let component: EmployeeMessageFormComponent;
  let fixture: ComponentFixture<EmployeeMessageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMessageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
