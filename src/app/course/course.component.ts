import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  course= [
    {'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/angular.jpg'},
    {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'Learn NodeJS','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/nodejs.jpg'},
    {'id':4,'name':'Learn ReactJS','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/reactjs.jpg'},
  ]
}
