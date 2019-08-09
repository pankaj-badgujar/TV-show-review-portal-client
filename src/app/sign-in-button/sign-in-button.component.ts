import {Component, OnInit} from '@angular/core';
import {LoginServiceClientService} from "../services/login-service-client.service";

@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.css']
})
export class SignInButtonComponent implements OnInit {

  loggedInUser: any;

  constructor(private loginClientService: LoginServiceClientService) { }

  ngOnInit() {
    this.loggedInUser = this.loginClientService.loggedInUser;
  }

}
