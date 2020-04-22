import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) { }

  courseId = ''
  courses = []


  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.courseId = params.courseId;
    });
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
