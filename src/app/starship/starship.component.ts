import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {SpacexService} from "../spacex.service";

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css'],
  providers: [NgbCarouselConfig]
})
export class StarshipComponent implements OnInit {

  collection = {};

  constructor(private spacex: SpacexService, config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.spacex.getData('rockets').subscribe((result) => {
      this.collection = result;
    });
  }
}
