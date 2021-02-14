import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceY';
  menuActive = false;

  handleClick(event: Event): void {
    event.preventDefault();
    this.menuActive = !this.menuActive;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event): void {
    $event.preventDefault();
    this.menuActive = false;
  }
}
