import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsManagerComponent } from './mails-manager.component';

describe('MailsManagerComponent', () => {
  let component: MailsManagerComponent;
  let fixture: ComponentFixture<MailsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
