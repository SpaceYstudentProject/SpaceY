import { Component, OnInit } from '@angular/core';
import { SpaceDevsService } from "../space-devs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collection = {};

  constructor(private spaceDevsService: SpaceDevsService) {
  }

  ngOnInit(): void {
    this.spaceDevsService.getData('articles').subscribe((result) => {
      this.collection = result;
    });
  }

}
