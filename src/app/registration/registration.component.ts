import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ParticipantService} from '../../services/participant.service';
import {CustomValidator } from '../validators/customValidators';

import { UniqueCode } from '../uniqueCode';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  providers: [ParticipantService]
})


export class RegistrationComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;
  //
  receiveAttempt = false;
  receivedEditData = false;

  constructor(private fb: FormBuilder, private participantService: ParticipantService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      educationalDegree: ['Daktaras', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(2), CustomValidator.phone]],
      email: ['', [Validators.required, CustomValidator.emailRegex]],
      institution: ['', [Validators.required, Validators.minLength(2)]],
      messageName: ['', [Validators.required, Validators.minLength(2)]],
      messageAuthorsAndAffiliations: ['', [Validators.required, Validators.minLength(2)]],
      messageSummary: ['', [Validators.required, CustomValidator.length400]],
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

        if (data.educationalDegree.toString() != '') {
          this.receivedEditData = true;
        }
        console.log(data);

        this.registerForm = this.fb.group({
          educationalDegree: [data.educationalDegree, Validators.required],
          firstName: [data.firstName, Validators.required],
          lastName: [data.lastName, Validators.required],
          phoneNumber: [data.phoneNumber, Validators.compose([Validators.required])],
          email: [data.email, Validators.compose([Validators.required, CustomValidator.emailRegex])],
          institution: [data.institution, Validators.required],
          messageName: [data.messageName, Validators.required],
          messageAuthorsAndAffiliations: [data.messageAuthorsAndAffiliations, Validators.required],
          messageSummary: [data.messageSummary, Validators.compose([Validators.required, CustomValidator.length400])],
          needsRoom: [data.needsRoom, Validators.required],
          roomType: [data.roomType],
          hasEscort: [data.hasEscort, Validators.required],
          escortWillParticipateInEvents: [data.escortWillParticipateInEvents],
          needsBill: [data.needsBill, Validators.required],
          billInstitution: [data.billInstitution],
        });
    }.bind(this));
  }

  onKey(event: any) { // without type info
    UniqueCode.uniqueCode = event.target.value;
  }

  submitButtonClick(): void {
      console.log(this.registerForm);
      this.participantService.insertParticipant(this.registerForm.value);
      this.submitted = true;
  }
}
