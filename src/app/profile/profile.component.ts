import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";
import {LoginServiceClientService} from "../services/login-service-client.service";
import {StudentService} from "../services/student.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  editing: boolean;
  userId: number;
  loggedInUser: object;
  ownAccount: boolean;

  firstName: string;
  lastName: string;
  username: string;
  password: string;
  phoneNumber: number;
  email: string;
  private mySubmissions: [];


  constructor(private studentService: StudentService,
              private loginService: LoginServiceClientService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {

    this.editing = false;
  }

  ngOnInit() {

    this.loggedInUser = this.loginService.getLoggedInUser();

    this.activatedRoute.params.subscribe(params => {
      this.userId = params["userId"];
    });

    if (this.loggedInUser == null) {
      this.ownAccount = false;
    } else {
      // @ts-ignore
      // this.ownAccount = this.userId == this.loggedInUser.id;
      if(this.userId === null || this.userId === undefined){
        // @ts-ignore
        this.userId = this.loggedInUser.id;
        this.ownAccount = true
      } else {
        // @ts-ignore
        this.ownAccount = this.userId == this.loggedInUser.id;
      }
    }


    this.userService.findUserById(this.userId)
      .then(user => {
        this.getFieldValues(user);
      });

    // @ts-ignore
    if (this.loggedInUser.role == 'FACULTY' || this.ownAccount ) {

      this.studentService.findStudentByUserId(this.userId)
        .then(student => {
          this.mySubmissions = student.analysisList;
        })

    }


  }

  getFieldValues(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
  }

  toggleEditing() {
    if (this.editing) {
      if (this.valuesInvalid()) {
        alert('Fields cannot be blank');
        return;
      }
      if(this.phoneNumber.toString().length !== 10){
        alert('Invalid Length of Phone Number');
        return;
      }
      this.updateUser();
    }
    this.editing = !this.editing;
  }

  valuesInvalid() {
    if (this.firstName.trim().length < 1 ||
      this.lastName.trim().length < 1 ||
      this.username.trim().length < 1 ||
      this.password.trim().length < 1) {
      return true;
    }
  }

  updateUser() {

    let userJSON = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "username": this.username,
      "password": this.password,
      "phoneNumber": this.phoneNumber,
      "email": this.email
    };

    this.userService.updateUser(this.userId, userJSON)
      .then(user => this.getFieldValues(user))

  }

}
