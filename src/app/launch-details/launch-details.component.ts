import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpacexService } from "../spacex.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Element} from "@angular/compiler";

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

  commentForm = new FormGroup({
    comment: new FormControl("")
  })

  currentContentRocket = 'overview';
  commentActive = false;
  commentDisabled = true;
  commentTreeStatus = 'hide';

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

  get comment() { return this.commentForm.get("comment"); }

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

  onClickCommentInput(event: Event) {
    event.preventDefault();
    if(!this.commentActive)
      this.commentActive = true;
  }

  onClickCancel(event: Event) {
    event.preventDefault();
    if(this.commentActive)
      this.commentActive = false;
  }

  commentChange() {
    this.commentDisabled = this.comment.value == '';
  }

  onClickComment(event: Event) {
    event.preventDefault();
    if(this.comment.value != '')
      console.log(this.comment.value);
  }

  onClickView(event: Event) {
    event.preventDefault();
    this.commentTreeStatus = 'view'
  }

  onClickHide(event: Event) {
    event.preventDefault();
    this.commentTreeStatus = 'hide'
  }

  autoGrow(element: any) {
    element.style.minHeight = '38px';
    element.style.minHeight = (element.scrollHeight) + 'px';
  }

  getElementByClassName(name: string) {
    return document.getElementsByClassName(name).item(0);
  }
}
