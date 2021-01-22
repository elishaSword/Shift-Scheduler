import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinMessageComponent } from './bulletin-message.component';

describe('BulletinMessageComponent', () => {
  let component: BulletinMessageComponent;
  let fixture: ComponentFixture<BulletinMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletinMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
