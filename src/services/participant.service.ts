import { Injectable } from '@angular/core';
import { Participant } from 'models/participant';
import { Http } from '@angular/http';

@Injectable()
export class ParticipantService {
    private insertDataSource = "https://confregistration-api-staging.herokuapp.com/post";

    constructor (private http: Http) { }

    insertParticipant(participant: Participant) {
        let body = JSON.stringify(participant);
        return this.http.post(this.insertDataSource, body);
    }
}