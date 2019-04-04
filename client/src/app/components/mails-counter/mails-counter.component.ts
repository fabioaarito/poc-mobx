import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-mails-counter',
  templateUrl: './mails-counter.component.html',
  styleUrls: ['./mails-counter.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailsCounterComponent {

  constructor(public mailService: MailService) {}

}
