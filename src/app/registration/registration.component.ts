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

  constructor(private fb: FormBuilder, private participantService: ParticipantService) {
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

  onUploadTypeChange(e) {
    console.log(e.target.value);
  }


  submitButtonClick(event) {
    console.log(this.registerForm);
    this.participantService.insertParticipant(this.registerForm.value);
  }

}
