import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(

    private http: HttpClient

  ) { }

  url: string = "http://localhost:9000";

  getMessages(): Observable<any>{
    let url = this.url + `/api/get-messages`;
    return this.http.get(url);
  }

  postMessage(author: string, message: string) {
    let url = this.url + `/api/create-message`;
    let body = {
      "author":author,
      "message": message,
      "date": new Date()
  }
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Content-Type' :  'application/json'
      }),
    });
  }
}
