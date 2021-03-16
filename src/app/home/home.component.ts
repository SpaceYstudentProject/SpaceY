import { Component, OnInit } from '@angular/core';
import { SpaceDevsService } from "../space-devs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collection = {};
  photos = ['https://images.unsplash.com/photo-1517976384346-3136801d605d?ixid=MnwyMDY4MDh8MHwxfHNlYXJjaHwxfHxzcGFjZXglMjBsYXVuY2h8ZW58MHx8fHwxNjE1OTAxMzUw&ixlib=rb-1.2.1', //bottom
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1', //bottom
    'https://images.unsplash.com/photo-1522760122564-d567dac67f45?ixid=MnwyMDY4MDh8MHwxfHNlYXJjaHw0fHxzcGFjZXglMjBsYXVuY2h8ZW58MHx8fHwxNjE1OTAxMzUw&ixlib=rb-1.2.1', //bottom
    'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixid=MnwyMDY4MDh8MHwxfHNlYXJjaHw3fHxzcGFjZXglMjBsYXVuY2h8ZW58MHx8fHwxNjE1OTAxMzUw&ixlib=rb-1.2.1', //bottom
    'https://images.unsplash.com/photo-1517976487492-5750f3195933?ixid=MnwyMDY4MDh8MHwxfHNlYXJjaHw4fHxzcGFjZXglMjBsYXVuY2h8ZW58MHx8fHwxNjE1OTAxMzUw&ixlib=rb-1.2.1', //? center
    'https://images.unsplash.com/photo-1516850228053-a807778c4e0f?ixid=MnwyMDY4MDh8MHwxfHNlYXJjaHw5fHxzcGFjZXglMjBsYXVuY2h8ZW58MHx8fHwxNjE1OTAxMzUw&ixlib=rb-1.2.1', // center
    'https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2017e029829_large.jpg?itok=WPgTECAC', // delete
    'https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  ];

  constructor(private spaceDevsService: SpaceDevsService) {
  }

  ngOnInit(): void {
    this.spaceDevsService.getData('articles').subscribe((result) => {
      this.collection = result;
    });
  }

  getUrl(index: number) {
    return "url(\'" + this.photos[index] + "\')";
  }

}
