/* tslint:disable */
import {Component, OnInit} from '@angular/core';
import {RegisterClientService} from "../services/register-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  role: string;

  registrationSuccessful : boolean;

  constructor(private registerClientService: RegisterClientService,
              private router: Router) {
  }

  ngOnInit() {
    this.registrationSuccessful = false;
  }

  register() {
    const newUser = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "username": this.userName,
      "password": this.password,
      "role": Number(this.role)
    };
    this.registerClientService.register(newUser)
      .then((user) => {

        this.role == "1" ? this.registerFaculty(user) : this.registerStudent(user);


        this.registrationSuccessful = true;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000)
      })

  }

  registerStudent(user){
    let studentJSON = {
      "user" : user
    };
    this.registerClientService.registerStudent(studentJSON).then();

  }

  registerFaculty(user){
    let facultyJSON = {
      "user" : user
    };
    this.registerClientService.registerFaculty(facultyJSON).then();
  }

  redirectManually() {
    this.router.navigate(['/']);
  }
}
