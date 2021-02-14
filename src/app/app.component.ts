import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceY';
  menuActive = false;

  onClickMenu(event: Event): void {
    event.preventDefault();
    this.menuActive = !this.menuActive;
  }

  onScrollEvent(event: Event): void {
    event.preventDefault();
    this.menuActive = false;
  }
}
