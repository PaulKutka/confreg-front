import { Component, OnInit } from '@angular/core';
import { Participant } from 'models/participant';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newParticipant: Participant;

  onSubmit(){
    // insert newParticipant
  }

}
