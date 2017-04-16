import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ParticipantService} from 'services/participant.service';
import {CustomValidators} from 'ng2-validation';
import {UsernameValidator} from '../validators/validationEmail'

import {ReCaptchaComponent} from 'angular2-recaptcha/lib/captcha.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ParticipantService]
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitAttempt = false;
  submitAccept = false;

  @ViewChild(ReCaptchaComponent) captcha:ReCaptchaComponent;
  public token: String = '';

  constructor(private fb: FormBuilder,
              private participantService: ParticipantService) {
  }

  private handleCorrectCaptcha(response: string) {
    this.token = this.captcha.getResponse();
    console.log('reCAPTCHA response:');
    console.log(this.token);
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      educationalDegree: ['Daktaras', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.compose([Validators.required, CustomValidators.number])],
      email: ['', Validators.compose([Validators.required, CustomValidators.email])],
      institution: ['', Validators.required],
      messageName: ['', Validators.required],
      messageAuthorsAndAffiliations: ['', Validators.required],
      messageSummary: ['', Validators.compose([Validators.required, UsernameValidator.lengthOver400])],
      needsRoom: ['Ne', Validators.required],
      roomType: [''],
      hasEscort: ['Ne', Validators.required],
      escortWillParticipateInEvents: [''],
      needsBill: ['Ne', Validators.required],
      billInstitution: [''],
    });
  }

  initSubmit(){
    console.log('Token: ' + this.token);
    console.log('Submit Attempt: ' + this.submitAttempt);
    this.submitAttempt = true;
  }

  submitButtonClick(event) {


    if(this.registerForm.valid && this.submitAttempt && this.token != '') {
      //console.log(this.registerForm);
      this.participantService.insertParticipant(this.registerForm.value);
      this.submitAccept = true;
      this.registerForm.reset();
      //this.token = '';
    }
  }
//C4.5
}
