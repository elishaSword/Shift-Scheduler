import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinComponentComponent } from './bulletin-component.component';

describe('BulletinComponentComponent', () => {
  let component: BulletinComponentComponent;
  let fixture: ComponentFixture<BulletinComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletinComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
