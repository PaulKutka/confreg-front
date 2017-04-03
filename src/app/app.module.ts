import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RADIO_GROUP_DIRECTIVES} from "ng2-radio-group";

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RADIO_GROUP_DIRECTIVES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
