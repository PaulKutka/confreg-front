import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantService } from 'services/participant.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ ParticipantService ]
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private participantService: ParticipantService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      user: this.fb.group({
        userDegree: ['', Validators.required],
        userName: ['', Validators.required],
        userSurname: ['', Validators.required],
        userPhone: ['', Validators.required],
        userEmail: ['', Validators.required],
      }),
      project: this.fb.group({
        projectName: ['', Validators.required],
        projectAuthors: ['', Validators.required],
        projectSummary: ['', Validators.required],
      }),
      extra: this.fb.group({
        extraHotel: ['', Validators.required],
        extraHotelSize: ['', Validators.required],
        extraPerson: ['', Validators.required],
        extraPersonAttendance: ['', Validators.required],
        extraPayForPerson: ['', Validators.required],
        extraPayForPersonInstitution: ['', Validators.required],
      }),
    });
  }

  submitButtonClick(event) {
    console.log(this.registerForm);
    this.participantService.insertParticipant(this.registerForm.value);
  }

}
