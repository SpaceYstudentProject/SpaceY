import { Component, OnInit } from '@angular/core';
import { SpacexService } from "../spacex.service";

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  collection = {};

  constructor(private spacex: SpacexService) {
  }

  ngOnInit(): void {
    this.spacex.getData('crew').subscribe((result) => {
      this.collection = result;
    });
  }

  splitBy(number: number, collection: {}) {
    let i;
    let array = [];
    for (i = 0; i < this.length(collection); i++) {
      if(i % number == 0) {
        array.push(i);
      }
    }
    return array;
  }

  length(collection: {}) {
    length = 0
    for (let i in collection) {
      length++;
    }
    return length - 1; //bad
  }
}
