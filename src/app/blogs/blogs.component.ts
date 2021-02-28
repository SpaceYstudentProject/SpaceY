import { Component, OnInit } from '@angular/core';
import {SpaceDevsService} from "../space-devs.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  collection = {};

  constructor(private spaceDevsService: SpaceDevsService) {
  }

  ngOnInit(): void {
    this.spaceDevsService.getData('blogs').subscribe((result) => {
      this.collection = result;
    });
  }
}
