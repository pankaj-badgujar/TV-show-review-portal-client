import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";
import {LoginServiceClientService} from "../services/login-service-client.service";


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


  constructor(private loginService: LoginServiceClientService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {

    this.editing = false;
  }

  ngOnInit() {

    this.loggedInUser = this.loginService.getLoggedInUser();

    this.activatedRoute.params.subscribe(params => {
      this.userId = params["userId"];
    });

    if(this.loggedInUser == null){
      this.ownAccount =  false;
    }
    else{
      // @ts-ignore
      this.ownAccount = this.userId == this.loggedInUser.id;
    }


    this.userService.findUserById(this.userId)
      .then(user => {
        this.getFieldValues(user);
      });


  }

  getFieldValues(user){
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.username = user.username;
    this.password = user.password;
  }

  toggleEditing() {
    if (this.editing) {
      if(this.valuesInvalid()){
        alert('Fields cannot be blank');
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
      "password": this.password
    };

    this.userService.updateUser(this.userId, userJSON)
      .then(user => this.getFieldValues(user))

  }

}
