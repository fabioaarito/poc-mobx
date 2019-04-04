import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-mail-generator',
  templateUrl: './mail-generator.component.html',
  styleUrls: ['./mail-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailGeneratorComponent {
  public mailGeneratorForm = new FormGroup({
    min: new FormControl(1),
    max: new FormControl(100),
  });

  constructor(public _mailService: MailService) {}

  public generateRandomMails() {
    this._mailService.updateWithRandomItems(
      this.mailGeneratorForm.value.min,
      this.mailGeneratorForm.value.max,
    );
  }
}
