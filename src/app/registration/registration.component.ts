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
  token = false;

  private recaptchaSiteKey = '6Lf_RR0UAAAAAFnJLZEkeXmvNK6yUqFW-3V8DAsD';

  private onCaptchaComplete(response: any) {
    // console.log('reCAPTCHA response recieved:');
    // console.log(response.success);
    // console.log(response.token);
    if(response.success)
      this.token = response.success;
  }

  constructor(private fb: FormBuilder,
              private participantService: ParticipantService) {
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
      messageSummary: ['', Validators.compose([Validators.required])], // removed validator
      needsRoom: ['Ne', Validators.required],
      roomType: [''],
      hasEscort: ['Ne', Validators.required],
      escortWillParticipateInEvents: [''],
      needsBill: ['Ne', Validators.required],
      billInstitution: [''],
    });
  }

  initSubmit(){
    console.log('Submit Attempt: ' + this.submitAttempt);
    this.submitAttempt = true;
  }

  submitButtonClick(event) {


    if(this.registerForm.valid && this.submitAttempt && this.token ) {
      //console.log(this.registerForm);
      this.participantService.insertParticipant(this.registerForm.value);
      this.submitAccept = true;
    }
    this.token = false;
  }
//C4.5
}
