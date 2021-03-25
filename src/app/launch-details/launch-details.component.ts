import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpacexService } from "../spacex.service";

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  id = '#'
  launch = Object();
  rocket = Object();
  opacity = 1.0;

  constructor(private spacex: SpacexService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;

    this.spacex.getData('launches/' + this.id).subscribe((result) => {
      this.launch = result;

      this.spacex.getData('rockets/' + this.launch.rocket).subscribe((result) => {
        this.rocket = result;
      });
    });
  }

  onScrollEvent(event: Event): void {
    event.preventDefault();
    // this.opacity -= 0.01;
  }
}
