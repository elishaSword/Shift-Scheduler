import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerShoutFormComponent } from './manager-shout-form.component';

describe('ManagerShoutFormComponent', () => {
  let component: ManagerShoutFormComponent;
  let fixture: ComponentFixture<ManagerShoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerShoutFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerShoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
