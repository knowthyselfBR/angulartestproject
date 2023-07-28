import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CourseComponent} from "./course/course.component";
import {JoinnowComponent} from "./joinnow/joinnow.component";
import {AboutComponent} from "./about/about.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course', component: CourseComponent },
  { path: 'joinnow', component: JoinnowComponent },
  { path: 'about', component: AboutComponent },



];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
