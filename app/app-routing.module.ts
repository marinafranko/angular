import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportComponent } from "./sport/sport.component";
import { EntertainmentComponent } from "./entertainment/entertainment.component";
import { HealthComponent } from "./health/health.component";
import { ScienceComponent } from "./science/science.component";
import { TechnologyComponent } from "./technology/technology.component";



const routes: Routes = [
  { path: '', redirectTo: '/sport', pathMatch: 'full' },
  { path: 'sport', component: SportComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'health', component: HealthComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'technology', component: TechnologyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
