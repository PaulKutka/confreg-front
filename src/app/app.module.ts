import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReCaptchaModule } from 'angular2-recaptcha';
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
    ReCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
