import { Injectable } from '@angular/core';
import { Participant } from 'models/participant';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ParticipantService {
  private insertDataSource = "https://confregistration-api-sta-pr-11.herokuapp.com/post";

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) { }

  insertParticipant(participant: Participant) {
    let body = JSON.stringify(participant);
    return this.http.post(this.insertDataSource, body, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
