import { Component, OnInit } from '@angular/core';
import { Participant } from 'models/participant';
import { ParticipantService } from 'services/participant.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ ParticipantService ]
})
export class RegistrationComponent implements OnInit {

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
  }

  newParticipant: Participant;

  onSubmit() {
      this.participantService.insertParticipant(this.newParticipant);
  }

}
