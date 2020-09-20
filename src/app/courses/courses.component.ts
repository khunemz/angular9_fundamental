import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse: any;
  courses: any;

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.resetCurrentCourse();
    this.courseService.all().subscribe( courses => {
      console.log('init course : ' , courses);
      this.courses = courses;
    });
  }

  selectCourse(course): void {
    this.currentCourse = course;
  }

  loadCourses() {
    this.courseService.all().subscribe( courses => {
      console.log('init course : ' , courses);
      this.courses = courses;
    });
  }
  

  saveCourse(currentCourse):void {
    let course = currentCourse;
    if(course.id) {
      this.courseService.update(course).subscribe(result => {
        this.loadCourses();
      });
    } else {
      this.courseService.create(course).subscribe(result => {
          this.loadCourses();
      });
    }
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
