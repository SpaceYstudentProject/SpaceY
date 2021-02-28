import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceDevsService {
  url = 'https://spaceflightnewsapi.net/api/v2/';

  constructor(private http: HttpClient) { }
  getData(path: string) {
    return this.http.get(this.url + path);
  }
}
