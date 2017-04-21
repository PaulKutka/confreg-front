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
      id: [''],
      educationalDegree: ['Daktaras', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(2), CustomValidator.phone]],
      email: ['', [Validators.required, CustomValidator.emailRegex]],
      institution: ['', [Validators.required, Validators.minLength(2)]],
      messageName: ['', [Validators.required, Validators.minLength(2)]],
      messageAuthorsAndAffiliations: ['', [Validators.required, Validators.minLength(2)]],
      messageSummary: ['', [Validators.required]], //CustomValidator.length400
      needsRoom: ['Ne', Validators.required],
      roomType: [''],
      hasEscort: ['Ne', Validators.required],
      escortWillParticipateInEvents: [''],
      needsBill: ['Ne', Validators.required],
      billInstitution: [''],
    });
  }

  onEdit(): void {
    this.participantService.getForm().
      subscribe( (data: any) => {
      this.registerForm.setValue(data);
    });
  }

  onKey(event: any) { // without type info
    UniqueCode.uniqueCode = event.target.value;
  }

  onSubmit(): void {
      console.log(this.registerForm);
      this.participantService.insertParticipant(this.registerForm.value);
      this.submitted = true;
  }
}
