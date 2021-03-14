import {
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'SpaceY';
  menuActive = false;

  constructor(public router: Router) {
  }

  onClickMenu(event: Event): void {
    event.preventDefault();
    this.menuActive = !this.menuActive;
  }

  onScrollEvent(event: Event): void {
    event.preventDefault();
    this.menuActive = false;
  }
}

