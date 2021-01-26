import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMessageFormComponent } from './manager-message-form.component';

describe('ManagerMessageFormComponent', () => {
  let component: ManagerMessageFormComponent;
  let fixture: ComponentFixture<ManagerMessageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerMessageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
