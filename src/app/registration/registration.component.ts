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

  received = false;
  pressedReceive = false;

  edited = false;
  deleted = false;
  registerForm: FormGroup;


  constructor(private fb: FormBuilder,
              private participantService: ParticipantService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      id: [''],
      educationalDegree: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(2), CustomValidator.phone]],
      email: ['', [Validators.required, CustomValidator.emailRegex]],
      institution: ['', [Validators.required, Validators.minLength(2)]],
      messageName: ['', [Validators.required, Validators.minLength(2)]],
      messageAuthorsAndAffiliations: ['', [Validators.required, Validators.minLength(2)]],
      messageSummary: ['', [Validators.required, CustomValidator.length400]],
      needsRoom: ['', Validators.required],
      roomType: [''],
      hasEscort: ['', Validators.required],
      escortWillParticipateInEvents: [''],
      needsBill: ['', Validators.required],
      billInstitution: [''],
    });
  }

  onReceive(): void {
    this.participantService.getForm().
      subscribe( (data: any) => {
      this.registerForm.setValue(data);
      this.received = true;
    });
    this.pressedReceive = true;
    // previous parameters
    this.deleted = false;
    this.submitted = false;
  }

  onEdit(): void {
    const id = this.registerForm.get('id').value;
    // this.participantService.editParticipant(id, this.registerForm.value);
    this.edited = true;

    // previous parameters
    this.deleted = false;
  }

  onDelete(): void {
    const id = this.registerForm.get('id').value;
    // this.participantService.deleteParticipant(id);
    this.registerForm.reset();
    this.deleted = true;

    // previous parameters
    this.edited = false;
    this.pressedReceive = false;
    this.received = false;
  }


  onKey(event: any): void { // without type info
    UniqueCode.uniqueCode = event.target.value;
  }

  onSubmit(): void {
      console.log(this.registerForm);
      if (this.registerForm.valid && this.registerForm.touched) {
        this.participantService.insertParticipant(this.registerForm.value);
        this.registerForm.reset();

        // previous parameters
        this.submitted = true;
        this.deleted = false;
      }
  }

  clearBillExtraData(): void {
    this.registerForm.get('billInstitution').setValue('');
  }
  clearHotelExtraData(): void {
    this.registerForm.get('roomType').setValue('');
  }
  clearEscortExtraData(): void {
    this.registerForm.get('escortWillParticipateInEvents').setValue('');
  }
}
