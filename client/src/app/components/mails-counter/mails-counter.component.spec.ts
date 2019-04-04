import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsCounterComponent } from './mails-counter.component';

describe('MailsCounterComponent', () => {
  let component: MailsCounterComponent;
  let fixture: ComponentFixture<MailsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
