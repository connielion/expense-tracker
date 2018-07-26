import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tracker', component: TrackerComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
