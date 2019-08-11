import {Component, OnInit} from '@angular/core';
import {LoginServiceClientService} from "../services/login-service-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidCredentialFlag = false;

  constructor(private loginService: LoginServiceClientService, private router: Router) {
  }

  ngOnInit() {
  }

  login = (username, password) => {
    let credentials = {
      "username": username,
      "password": password
    };

    this.loginService.authenticate(credentials)
      .then(
        user => {
        if(user === null){
          this.invalidCredentialFlag = true;
        }
        else{
          this.invalidCredentialFlag = false;
          this.router.navigate(['/'])
        }
      }
      )
  }

}
