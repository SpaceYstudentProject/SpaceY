import { Component, OnInit } from '@angular/core';
import { SpaceDevsService } from "../space-devs.service";
import {SpacexService} from "../spacex.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collection = {};
  upcoming = {};
  photos = ['https://images.unsplash.com/photo-1517976384346-3136801d605d?ixid=MnwyMDY4MDh8MHwxfHNlYXJjaHwxfHxzcGFjZXglMjBsYXVuY2h8ZW58MHx8fHwxNjE1OTAxMzUw&ixlib=rb-1.2.1', //bottom
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1', //bottom
    'https://images.unsplash.com/photo-1541185933-55ad9888f1df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' //bottom
  ];

  constructor(private spaceDevsService: SpaceDevsService, private spacexService: SpacexService) {
  }

  ngOnInit(): void {
    this.spaceDevsService.getData('articles').subscribe((result) => {
      this.collection = result;
    });
    this.spacexService.postData('launches/query', this.spacexService.getLaunchBody()).subscribe((result) => {
      this.upcoming = result;
      console.log(this.upcoming)
    })
  }

  getUrl(index: number) {
    return "url(\'" + this.photos[index] + "\')";
  }

  getUrlFromString(url: string) {
    return "url(\'" + url + "\')";
  }

  getDate(unix: number) {
    return new Date(unix).toLocaleDateString("en-US")
  }

  getTime(unix: number) {
    return new Date(unix).toLocaleTimeString("en-US")
  }
}
