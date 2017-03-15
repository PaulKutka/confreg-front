import { Injectable } from '@angular/core';
import { Participant } from 'models/participant';

@Injectable()
export class ParticipantService {
    insertParticipant(participant: Participant) {
        Promise.resolve(InsertDataSource).then((participants: Participant[]) => participants.push(participant));
    }
}