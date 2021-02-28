import { Component, OnInit } from '@angular/core';
import {SpacexService} from "../spacex.service";

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
}
