import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SportComponent } from "./sport/sport.component";
import { HealthComponent } from "./health/health.component";
import { EntertainmentComponent } from "./entertainment/entertainment.component";
import { ScienceComponent } from "./science/science.component";
import { TechnologyComponent } from "./technology/technology.component";

@NgModule({
  declarations: [
    AppComponent,
    SportComponent,
    HealthComponent,
    EntertainmentComponent,
    ScienceComponent,
    TechnologyComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
