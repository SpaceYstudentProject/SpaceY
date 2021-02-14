import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  url = 'https://api.spacexdata.com/v4/';

  constructor(private http: HttpClient) { }
  getData(path: string) {
    return this.http.get(this.url + path);
  }
}
