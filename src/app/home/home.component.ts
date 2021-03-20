import { Component, OnInit } from '@angular/core';
import { SpaceDevsService } from "../space-devs.service";
import {range} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collection = {};
  photos = ['https://images.unsplash.com/photo-1517976384346-3136801d605d?ixid=MnwyMDY4MDh8MHwxfHNlYXJjaHwxfHxzcGFjZXglMjBsYXVuY2h8ZW58MHx8fHwxNjE1OTAxMzUw&ixlib=rb-1.2.1', //bottom
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1', //bottom
    'https://images.unsplash.com/photo-1541185933-55ad9888f1df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', //bottom
    'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixid=MnwyMDY4MDh8MHwxfHNlYXJjaHw3fHxzcGFjZXglMjBsYXVuY2h8ZW58MHx8fHwxNjE1OTAxMzUw&ixlib=rb-1.2.1', //bottom
    'https://images.unsplash.com/photo-1517976487492-5750f3195933?ixid=MnwyMDY4MDh8MHwxfHNlYXJjaHw4fHxzcGFjZXglMjBsYXVuY2h8ZW58MHx8fHwxNjE1OTAxMzUw&ixlib=rb-1.2.1', //? center
    'https://images.unsplash.com/photo-1516850228053-a807778c4e0f?ixid=MnwyMDY4MDh8MHwxfHNlYXJjaHw5fHxzcGFjZXglMjBsYXVuY2h8ZW58MHx8fHwxNjE1OTAxMzUw&ixlib=rb-1.2.1', // center
    'https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2017e029829_large.jpg?itok=WPgTECAC', // delete
    'https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  ];
  random = [];

  constructor(private spaceDevsService: SpaceDevsService) {
  }

  ngOnInit(): void {
    this.spaceDevsService.getData('articles').subscribe((result) => {
      this.collection = result;
      console.log(this.collection);
    });

    this.random = [];
    for (let index in [...Array(this.photos.length).keys()]) {
      this.random.push(Number(index));
    }
    this.shuffle(this.random);
  }

  shuffle(array: number[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

   getUrl(index: number) {
    return "url(\'" + this.photos[index] + "\')";
  }

  getUrlFromString(url: string) {
    return "url(\'" + url + "\')";
  }
}
