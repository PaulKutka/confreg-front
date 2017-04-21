import {Component, OnInit} from '@angular/core';
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

  constructor(private fb: FormBuilder, private participantService: ParticipantService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      educationalDegree: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, CustomValidators.number]],
      email: ['', [Validators.required, CustomValidators.email]],
      institution: ['', Validators.required],
      messageName: ['', Validators.required],
      messageAuthorsAndAffiliations: ['', Validators.required],
      messageSummary: ['', [Validators.required, UsernameValidator.lengthOver400]],
      needsRoom: ['', Validators.required],
      roomType: [''],
      hasEscort: ['', Validators.required],
      escortWillParticipateInEvents: [''],
      needsBill: ['', Validators.required],
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

  submitButtonClick(): void {
      console.log(this.registerForm);
      this.participantService.insertParticipant(this.registerForm.value);
  }
}
