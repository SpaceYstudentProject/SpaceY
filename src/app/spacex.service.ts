import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  url = 'https://api.spacexdata.com/v4/';

  body = new Object({
    query: {
      upcoming: true
    },
    options: {
      limit: 3,
      sort: {
        flight_number: 'asc'
      },
      populate: [
        {
          path: 'payloads'
        }
      ]
    }
  });

  constructor(private http: HttpClient) { }
  getData(path: string) {
    return this.http.get(this.url + path);
  }

  postData(path: string, body : any) {
     return this.http.post(this.url + path, body);
  }

  getLaunchBody() {
    return this.body;
  }
}
