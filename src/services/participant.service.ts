import { Injectable } from '@angular/core';
import { Participant } from 'models/participant';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';


@Injectable()
export class ParticipantService {
  private insertDataSource = "https://confregistration-api.herokuapp.com/post";
  private findDataSource = "https://confregistration-api.herokuapp.com/find";

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) { }

  insertParticipant(participant: Participant) {
    let body = JSON.stringify(participant);
    return this.http.post(this.insertDataSource, body, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  getForm(): Observable<Response> {
    var obj: any = { "uniqueCode":  "DAMSS-swyTo01t" };

    let body = JSON.stringify(obj);
    return this.http.post(this.findDataSource, body, { responseType: ResponseContentType.Json })
      .map(function (res: Response) {
        return res.json();
      })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
