import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ThemeModule} from './theme/theme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MailEntryComponent} from './components/mail-entry/mail-entry.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MobxAngularModule} from 'mobx-angular';
import {MailsManagerComponent} from './components/mails-manager/mails-manager.component';
import {MailGeneratorComponent} from './components/mail-generator/mail-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    MailEntryComponent,
    MailsManagerComponent,
    MailGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    ThemeModule,
    FormsModule,
    FlexLayoutModule,
    MobxAngularModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
