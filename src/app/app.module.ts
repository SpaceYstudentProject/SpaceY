import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MissionComponent } from './mission/mission.component';
import { StarshipComponent } from './starship/starship.component';
import { AppRoutingModule } from './app-routing.module';
import { LaunchesComponent } from './launches/launches.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './blogs/blogs.component';
import { CrewComponent } from './crew/crew.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule} from "@angular/forms";
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    StarshipComponent,
    LaunchesComponent,
    HomeComponent,
    BlogsComponent,
    CrewComponent,
    LoginComponent,
    RegisterComponent,
    UpcomingComponent,
    LaunchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
