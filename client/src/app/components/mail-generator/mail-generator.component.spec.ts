import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MailGeneratorComponent} from './mail-generator.component';

describe('MailGeneratorComponent', () => {
  let component: MailGeneratorComponent;
  let fixture: ComponentFixture<MailGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailGeneratorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
