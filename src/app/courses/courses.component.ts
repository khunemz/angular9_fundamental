import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Course } from '../shared/interfaces/course.interface';
import { CoursesService } from '../shared/services/courses.service';
=======
>>>>>>> 244d30ea6dbaf1cb99887af2ec8c9f6bff474d86

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
<<<<<<< HEAD
  courses$: Observable<Course[]>;
  selectedCourse: Course;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.loadCourses(true);
    this.resetCourse();
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  loadCourses(displayNotification: boolean) {
    this.courses$ = this.coursesService.getAllCourses(displayNotification);
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
    this.resetCourse();
  }

  updateCourse(course: Course) {
    this.coursesService.updateCourse(course).pipe(
      tap(() => this.loadCourses(false))
    ).subscribe();
  }

  createCourse(course: Course) {
    this.coursesService.createCourse(course).pipe(
      tap(() => this.loadCourses(false))
    ).subscribe();
  }

  deleteCourse(id: number) {
    this.coursesService.deleteCourse(id).pipe(
      tap(() => this.loadCourses(false))
    ).subscribe();
  }

  resetCourse() {
    const emptyCourse: Course = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.selectCourse(emptyCourse);
  }
=======
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 244d30ea6dbaf1cb99887af2ec8c9f6bff474d86
}
