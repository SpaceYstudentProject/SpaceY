import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  collection = {};

  constructor(private spacex: SpacexService, private router: Router) {
  }

  ngOnInit(): void {
    this.spacex.getData('launches').subscribe((result) => {
      this.collection = result;
    });
  }

  navigate(id: number) {
    this.router.navigate(['/launches/' + id]).then(r => {});
  }

}
