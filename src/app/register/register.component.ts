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
  phoneNumber: number;
  email: string;
  role: string;
  showPassword: boolean;
  timer: any;


  registrationSuccessful: number;

  constructor(private registerClientService: RegisterClientService,
              private router: Router) {
    this.showPassword = false;
    this.role = "0";
    this.registrationSuccessful = 0;

  }

  ngOnInit() {
  }

  register() {
    const newUser = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "username": this.userName,
      "password": this.password,
      "phoneNumber": this.phoneNumber,
      "email": this.email,
      "role": Number(this.role)
    };
    this.registerClientService.register(newUser)
      .then((user) => {

        if(user == null) {
          this.registrationSuccessful = -1;
        }else{

          this.role == "1" ? this.registerFaculty(user) : this.registerStudent(user);



        }

      })

  }

  registerStudent(user) {

    // Check FOR PHONE NUMBER AND REQUIRED FIELDS
    if (this.valuesInvalid()) {
      alert('Fields cannot be blank');
      return;
    }
    if (this.phoneNumber.toString().length !== 10) {
      alert('Invalid Length of Phone Number');
      return;
    }

    let studentJSON = {
      "user": user
    };
    this.registerClientService.registerStudent(studentJSON).then();

    this.registrationSuccessful = 1;
    this.timer = setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000)
  }

  valuesInvalid() {
    if (this.firstName ===undefined || this.firstName.trim().length < 1 ||
      this.lastName === undefined || this.lastName.trim().length < 1 ||
      this.userName === undefined || this.userName.trim().length < 1 ||
      this.password === undefined || this.password.trim().length < 1||
    this.email.trim().length < 1)
    {
      return true;
    }
  }

  registerFaculty(user) {

    // Check FOR PHONE NUMBER AND REQUIRED FIELDS
    if (this.valuesInvalid()) {
      alert('Fields cannot be blank');
      return;
    }
    if (this.phoneNumber.toString().length !== 10) {
      alert('Invalid Length of Phone Number');
      return;
    }

    let facultyJSON = {
      "user": user
    };
    this.registerClientService.registerFaculty(facultyJSON).then();

    this.registrationSuccessful = 1;
    this.timer = setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000)
  }

  redirectManually() {
    clearTimeout(this.timer);
    this.router.navigate(['/']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
