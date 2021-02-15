import { Component, OnInit } from '@angular/core';
import { Ll2Service } from '../ll2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collection = [];

  constructor(private ll2: Ll2Service) { }

  ngOnInit(): void {
    this.ll2.getData('launch/').subscribe((result) => {
      this.collection.push(result);
    });
    this.ll2.getData('event/').subscribe((result) => {
      this.collection.push(result);
    });
    this.ll2.getData('agencies/').subscribe((result) => {
      this.collection.push(result);
    });
    this.ll2.getData('spacestation/').subscribe((result) => {
      this.collection.push(result);
    });
  }

}
