import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MailService} from "../../services/mail.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {

  constructor(public mailService: MailService) { }
}
