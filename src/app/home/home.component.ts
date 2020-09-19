import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  currentCourseId = 1;
  courseLessons = {
    1: [
      { title: 'Hello Angular' },
      { title: 'Component Fundamentals' },
      { title: 'Template Driven Forms' },
      { title: 'Angular Services' },
      { title: 'Server Communication' },
      { title: 'Component Driven Architecture' },
      { title: 'Angular Routing' },
      { title: 'Unit Testing Fundamentals' },
    ]
  };
=======

  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];
>>>>>>> 244d30ea6dbaf1cb99887af2ec8c9f6bff474d86

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  getCourseLessons(courseId) {
    return this.courseLessons[courseId];
  }
=======
>>>>>>> 244d30ea6dbaf1cb99887af2ec8c9f6bff474d86
}
