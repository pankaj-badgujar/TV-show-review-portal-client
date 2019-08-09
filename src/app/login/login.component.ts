import {Component, OnInit} from '@angular/core';
import {LoginServiceClientService} from "../services/login-service-client.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidCredentialFlag = false;

  constructor(private loginService: LoginServiceClientService) {
  }

  ngOnInit() {
  }

  login = (username, password) => {
    let credentials = {
      "username": username,
      "password": password
    };

    this.loginService.validateCredentials(credentials)
      .then(user => {
        if(user === null){
          this.invalidCredentialFlag = true;
        }
        else{
          console.log(user);
          this.invalidCredentialFlag = false;
        }
      })
  }

}
