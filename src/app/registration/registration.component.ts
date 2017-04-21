import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ParticipantService} from 'services/participant.service';
import {CustomValidators} from 'ng2-validation';
import {UsernameValidator} from '../validators/validationEmail'


import { UniqueCode } from '../uniqueCode';
import {ReCaptchaComponent} from 'angular2-recaptcha/lib/captcha.component';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ParticipantService]
})


export class RegistrationComponent implements OnInit {

  private recaptchaSiteKey = '6Lf_RR0UAAAAAFnJLZEkeXmvNK6yUqFW-3V8DAsD';

  registerForm: FormGroup;
  submitAttempt = false;
  submitAccept = false;


  token = false;
  receiveAttempt = false;
  receivedEditData = false;
  private onCaptchaComplete(response: any) {
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
      messageSummary: ['', Validators.compose([Validators.required, UsernameValidator.lengthOver400])], //UsernameValidator.lengthOver400
      needsRoom: ['Ne', Validators.required],
      roomType: [''],
      hasEscort: ['Ne', Validators.required],
      escortWillParticipateInEvents: [''],
      needsBill: ['Ne', Validators.required],
      billInstitution: [''],
    });
  }

  onEdit() {
    this.receiveAttempt = true;
    this.receivedEditData = false;
    this.participantService.getForm().subscribe(function (data: any) {

        if (data.id.toString() != '') {
          UniqueCode.userId = data.id;
          this.receivedEditData = true;
        }
        // console.log(data);

        this.registerForm = this.fb.group({
          educationalDegree: [data.educationalDegree, Validators.required],
          firstName: [data.firstName, Validators.required],
          lastName: [data.lastName, Validators.required],
          phoneNumber: [data.phoneNumber, Validators.compose([Validators.required, CustomValidators.number])],
          email: [data.email, Validators.compose([Validators.required, CustomValidators.email])],
          institution: [data.institution, Validators.required],
          messageName: [data.messageName, Validators.required],
          messageAuthorsAndAffiliations: [data.messageAuthorsAndAffiliations, Validators.required],
          messageSummary: [data.messageSummary, Validators.compose([Validators.required, UsernameValidator.lengthOver400])], // comented validator
          needsRoom: [data.needsRoom, Validators.required],
          roomType: [data.roomType],
          hasEscort: [data.hasEscort, Validators.required],
          escortWillParticipateInEvents: [data.escortWillParticipateInEvents],
          needsBill: [data.needsBill, Validators.required],
          billInstitution: [data.billInstitution],
        });

    }.bind(this));
  }

  initSubmit(){
    console.log('Submit Attempt: ' + this.submitAttempt);
    this.submitAttempt = true;
  }

  onKey(event: any) { // without type info
    UniqueCode.uniqueCode = event.target.value;
  }

  submitButtonClick(event) {
    if(this.registerForm.valid && this.submitAttempt && this.token ) {
      this.participantService.insertParticipant(this.registerForm.value);
      this.submitAccept = true;
    }
  }

  updateForm(event) {
    if(this.registerForm.valid) {
      this.participantService.updateForm(this.registerForm.value);
    }

  }

//C4.5
}
