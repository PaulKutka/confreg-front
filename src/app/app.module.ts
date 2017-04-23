import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {TranslateModule} from 'ng2-translate';
import { Ng2GoogleRecaptchaModule }  from 'ng2-google-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    Ng2GoogleRecaptchaModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
