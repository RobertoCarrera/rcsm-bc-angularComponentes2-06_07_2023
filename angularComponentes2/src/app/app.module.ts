import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowContactInfoComponent } from './show-contact-info/show-contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowContactInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
