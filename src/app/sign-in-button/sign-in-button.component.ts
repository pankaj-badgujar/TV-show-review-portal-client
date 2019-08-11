import {Component, OnInit} from '@angular/core';
import {LoginServiceClientService} from "../services/login-service-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.css']
})
export class SignInButtonComponent implements OnInit {

  loggedInUser: any;

  constructor(private router: Router, private loginClientService: LoginServiceClientService) { }

  ngOnInit() {
    // this.loggedInUser = this.loginClientService.loggedInUser;
    this.loggedInUser = this.loginClientService.getLoggedInUser();
    console.log(this.loggedInUser);
  }

  logout(){
    console.log("in logout now");
    this.loginClientService.logoutUser();
    this.router.navigate(['/logout'])
  }

}
