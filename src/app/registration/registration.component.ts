import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ParticipantService} from 'services/participant.service';
import {CustomValidators} from 'ng2-validation';
import {UsernameValidator} from '../validators/validationEmail'


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

  private recaptchaSiteKey = '6LcqNB4UAAAAABngCqXQNuJIB-wGYbqGkAd-aprd';

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

  onEdit() {
    this.participantService.getForm().subscribe(function (data: any) {
        console.log(data);
        this.registerForm = this.fb.group({
          educationalDegree: [data.educationalDegree, Validators.required],
          firstName: [data.firstName, Validators.required],
          lastName: [data.lastName, Validators.required],
          phoneNumber: [data.phoneNumber, Validators.compose([Validators.required, CustomValidators.number])],
          email: [data.email, Validators.compose([Validators.required, CustomValidators.email])],
          institution: [data.institution, Validators.required],
          messageName: [data.messageName, Validators.required],
          messageAuthorsAndAffiliations: [data.messageAuthorsAndAffiliations, Validators.required],
          messageSummary: [data.messageSummary, Validators.compose([Validators.required, UsernameValidator.lengthOver400])],
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
