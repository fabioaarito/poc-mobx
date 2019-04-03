import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ThemeModule} from "./theme/theme.module";
import {FormsModule} from "@angular/forms";
import { MailEntryComponent } from './components/mail-entry/mail-entry.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MobxAngularModule} from "mobx-angular";
import { MailsManagerComponent } from './components/mails-manager/mails-manager.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MailEntryComponent,
    MailsManagerComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    ThemeModule,
    FormsModule,
    FlexLayoutModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
