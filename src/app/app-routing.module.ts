import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { NewsComponent } from './news/news.component';
import { StarshipComponent } from './starship/starship.component';


const routes: Routes = [
  { path: 'mission', component: MissionComponent },
  { path: 'news', component: NewsComponent },
  { path: 'starship', component: StarshipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
