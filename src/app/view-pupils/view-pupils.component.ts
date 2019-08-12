import { Component, OnInit } from '@angular/core';
import {EnrollUnderFacultyService} from "../services/enroll-under-faculty.service";
import {LoginServiceClientService} from "../services/login-service-client.service";

@Component({
  selector: 'app-view-pupils',
  templateUrl: './view-pupils.component.html',
  styleUrls: ['./view-pupils.component.css']
})
export class ViewPupilsComponent implements OnInit {

  loggedInUser: any;
  faculty: any;
  constructor(private loginService: LoginServiceClientService,
              private enrollService: EnrollUnderFacultyService) { }

  ngOnInit() {
     this.loggedInUser = this.loginService.getLoggedInUser();
    this.enrollService.findFacultyByUserId(this.loggedInUser.id)
      .then(faculty => {
        this.faculty = faculty;
      });


  }

}
