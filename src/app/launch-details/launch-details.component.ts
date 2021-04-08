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
  payloads = Object();
  launchpad = Object();

  currentContentRocket = 'overview';

  constructor(private spacex: SpacexService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;

    this.spacex.getData('launches/' + this.id).subscribe((result) => {
      this.launch = result;

      this.spacex.getData('rockets/' + this.launch.rocket).subscribe((result) => {
        this.rocket = result;
      });

      this.spacex.getData('payloads/' + this.launch.payloads).subscribe((result) => {
        this.payloads = result;
      });

      this.spacex.getData('launchpads/' + this.launch.launchpad).subscribe((result) => {
        this.launchpad = result;
      });
    });
  }

  onClickOverview(event: Event) {
    event.preventDefault();
    this.currentContentRocket = 'overview';
  }

  onClickFirstStage(event: Event) {
    event.preventDefault();
    this.currentContentRocket = 'first_stage';
  }

  onClickSecondStage(event: Event) {
    event.preventDefault();
    this.currentContentRocket = 'second_stage';
  }

  onClickEngines(event: Event) {
    event.preventDefault();
    this.currentContentRocket = 'engines';
  }

  getLaunchpadImage(path: string) {
    return 'assets/jpg/launchpads/' + path + '.jpg';
  }
}
