import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse: any = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    } , 
    {
      id: 2,
      title: 'React Fundamentals',
      description: 'Learn the fundamentals of Reacdt',
      percentComplete: 30,
      favorite: true
    } , 
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
  }

  selectCourse(course) : void {
    this.currentCourse = course;
  }

  deleteCourse(id): void {
    console.log('delete course : ' , id);

    
  }

}
