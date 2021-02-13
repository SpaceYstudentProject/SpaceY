import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  urlLaunches = 'https://api.spacexdata.com/v4/launches';

  constructor(private http: HttpClient) { }
  getLaunchesList() {
    return this.http.get(this.urlLaunches);
  }
}
