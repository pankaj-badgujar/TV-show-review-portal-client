import {Component, OnInit} from '@angular/core';
import {EnrollUnderFacultyService} from "../services/enroll-under-faculty.service";
import {LoginServiceClientService} from "../services/login-service-client.service";

@Component({
  selector: 'app-enroll-under-faculty',
  templateUrl: './enroll-under-faculty.component.html',
  styleUrls: ['./enroll-under-faculty.component.css']
})
export class EnrollUnderFacultyComponent implements OnInit {

  facultyEnrolled: any;
  loggedInUser: any;
  facultiesAvailable: any;

  constructor(private loginClientService: LoginServiceClientService,
              private enrollService: EnrollUnderFacultyService) {
  }

  ngOnInit() {

    this.loggedInUser = this.loginClientService.getLoggedInUser();
    // @ts-ignore

    this.enrollService.findAllFaculties()
      .then(faculties => {
        this.facultiesAvailable = faculties;
      });

    this.enrollService.findFacultyEnrolledIn(this.loggedInUser.id)
      .then(faculty => {
        this.facultyEnrolled = faculty;
      });

  }

  enroll(faculty) {
    // @ts-ignore
    this.enrollService.enrollUnderFaculty(this.loggedInUser.id, faculty)
      .then(() => {
        this.enrollService.findFacultyEnrolledIn(this.loggedInUser.id)
          .then(faculty => this.facultyEnrolled = faculty);
      });
  }

  cancelEnrollment() {
    this.enrollService.cancelEnrollment(this.loggedInUser.id)
      .then(()=>{
        this.enrollService.findFacultyEnrolledIn(this.loggedInUser.id)
          .then(faculty => this.facultyEnrolled = faculty);
      })
  }
}
