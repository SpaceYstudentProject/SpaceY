import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Ll2Service {
  url = 'https://ll.thespacedevs.com/2.1.0/';

  constructor(private http: HttpClient) { }
  getData(path: string) {
    return this.http.get(this.url + path);
  }
}
