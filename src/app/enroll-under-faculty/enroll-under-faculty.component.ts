import { Component, OnInit } from '@angular/core';
import {EnrollUnderFacultyService} from "../services/enroll-under-faculty.service";
import {LoginServiceClientService} from "../services/login-service-client.service";

@Component({
  selector: 'app-enroll-under-faculty',
  templateUrl: './enroll-under-faculty.component.html',
  styleUrls: ['./enroll-under-faculty.component.css']
})
export class EnrollUnderFacultyComponent implements OnInit {

  facultyEnrolled : object;
  loggedInUser : object;
  facultiesAvailable: [];

  constructor(private loginClientService: LoginServiceClientService,
              private enrollService: EnrollUnderFacultyService) { }

  ngOnInit() {

    this.loggedInUser = this.loginClientService.getLoggedInUser();
    // @ts-ignore
    this.enrollService.findFacultyEnrolledIn(this.loggedInUser.id)
      .then(faculty => this.facultyEnrolled = faculty);

    this.enrollService.findAllFaculties()
      .then(faculties => this.facultiesAvailable = faculties);

  }

  enroll(faculty) {
  // @ts-ignore
    this.enrollService.enrollUnderFaculty(this.loggedInUser.id, faculty)
    .then();
  }

  cancelEnrollment() {
    // this.facultyEnrolled = null;
  }
}
