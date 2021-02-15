import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  collection = {};

  constructor(private spacex: SpacexService) {
  }

  ngOnInit(): void {
    this.spacex.getData('launches').subscribe((result) => {
      this.collection = result;
    });
  }

}
