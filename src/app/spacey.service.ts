import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpaceyService {
  url = 'http://localhost:8074/spacey/api/v1/';

  httpHeaders = new HttpHeaders();
  headers: Object;

  constructor(private http: HttpClient) {
    this.httpHeaders.append('Access-Control-Allow-Origin', '*');
    this.httpHeaders.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    this.httpHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    this.headers = new Object({
      headers: this.httpHeaders
    });
  }

  getData(path: string) {
    return this.http.get(this.url + path);
  }

  postData(path: string, body: any) {
    return this.http.post(this.url + path, body, this.headers);
  }
}
