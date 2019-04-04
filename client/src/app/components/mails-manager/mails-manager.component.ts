import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MailService} from '../../services/mail.service';

@Component({
  selector: 'app-mails-manager',
  templateUrl: './mails-manager.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailsManagerComponent {
  constructor(public mailService: MailService) {}

  public changeDetections() {
    console.log('detect changes');
  }
}
