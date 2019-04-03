import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatIconModule, MatListModule, MatToolbarModule} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ]
})
export class ThemeModule { }
