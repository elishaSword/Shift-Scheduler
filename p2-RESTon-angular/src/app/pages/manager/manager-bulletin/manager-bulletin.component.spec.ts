import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBulletinComponent } from './manager-bulletin.component';

describe('ManagerBulletinComponent', () => {
  let component: ManagerBulletinComponent;
  let fixture: ComponentFixture<ManagerBulletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerBulletinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
