import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { MissionComponent } from './mission/mission.component';
import { StarshipComponent } from './starship/starship.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    MissionComponent,
    StarshipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
