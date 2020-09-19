import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { CoursesService } from '../shared/services/courses.service';
=======
>>>>>>> 244d30ea6dbaf1cb99887af2ec8c9f6bff474d86
import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ CoursesComponent ],
      providers: [
        {
          provide: CoursesService,
          useValue: jasmine.createSpyObj('CoursesService', ['getAllCourses', 'updateCourse', 'createCourse', 'deleteCourse'])
        }
      ]
=======
      declarations: [ CoursesComponent ]
>>>>>>> 244d30ea6dbaf1cb99887af2ec8c9f6bff474d86
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
