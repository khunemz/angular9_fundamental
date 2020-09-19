import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse: any;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'React Fundamentals',
      description: 'Learn the fundamentals of Reacdt',
      percentComplete: 30,
      favorite: true
    },
    {
      id: 3,
      title: 'HTML course',
      description: 'HTML Javascript',
      percentComplete: 30,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.currentCourse = {
      id: null , title: '' , description: '' , percentComplete: 0 , favorite: false 
    }
  }

  selectCourse(course): void {
    this.currentCourse = course;
  }

  saveCourse():void {
    
  }
  deleteCourse(id): void {
    console.log('delete course : ', id);


  }

  cancel() : void {
    this.resetCurrentCourse();
  }

  resetCurrentCourse(): void {
    const emptyCourse = {
      id: null , title: '' , description: '' , percentComplete: 0 , favorite: false 
    }

    this.currentCourse = emptyCourse;
  }

}
