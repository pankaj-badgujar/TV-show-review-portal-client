import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-screen',
  templateUrl: './logout-screen.component.html',
  styleUrls: ['./logout-screen.component.css']
})
export class LogoutScreenComponent implements OnInit {

  timer : any;
  constructor(private router: Router) { }

  ngOnInit() {

    this.timer = setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000)
  }


  redirectManually() {
    clearTimeout(this.timer);
    this.router.navigate(['/']);
  }
}
