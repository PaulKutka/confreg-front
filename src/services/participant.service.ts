import { Injectable } from '@angular/core';
import { Participant } from 'models/participant';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import {UniqueCode} from '../app/uniqueCode';

// import { UniqueCode } from 'app/registration/registration.component';

@Injectable()
export class ParticipantService {
  private insertDataSource = 'https://confregistration-api.herokuapp.com/post';
  private findDataSource = 'https://confregistration-api.herokuapp.com/find';
  private deleteDataSource = 'https://confregistration-api.herokuapp.com/delete/';
  private editDataSource = 'https://confregistration-api.herokuapp.com/update/';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) { }

  insertParticipant(participant: Participant) {
    const body = JSON.stringify(participant);
    return this.http.post(this.insertDataSource, body, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  getForm(): Observable<Response> {
    const obj: any = { 'uniqueCode': UniqueCode.uniqueCode.toString() };
    const body = JSON.stringify(obj);
    return this.http.post(this.findDataSource, body, { responseType: ResponseContentType.Json })
      .map(function (res: Response) {
        return res.json();
      }).catch(this.handleError);
  }

  deleteParticipant(id: number) {
    this.http.delete(this.deleteDataSource + id)
      .toPromise()
      .catch(this.handleError);

  }

  editParticipant(id: number, participant: Participant) {
    const body = JSON.stringify(participant);
    return this.http.put(this.editDataSource + id, body, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
