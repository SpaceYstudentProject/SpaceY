import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpaceyService {
  url = 'http://localhost:8074/spacey/api/v1/';

  constructor(private http: HttpClient) {}

  getData(path: string) {
    return this.http.get(this.url + path);
  }

  postData(path: string, body: any) {
    return this.http.post(this.url + path, body);
  }
}
