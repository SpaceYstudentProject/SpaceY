import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { NewsComponent } from './news/news.component';
import { StarshipComponent } from './starship/starship.component';
import { LaunchesComponent } from './launches/launches.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'mission', component: MissionComponent },
  { path: 'news', component: NewsComponent },
  { path: 'starship', component: StarshipComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
