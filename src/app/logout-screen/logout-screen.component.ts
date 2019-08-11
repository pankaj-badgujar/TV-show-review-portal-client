import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-screen',
  templateUrl: './logout-screen.component.html',
  styleUrls: ['./logout-screen.component.css']
})
export class LogoutScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000)
  }


  redirectManually() {
    this.router.navigate(['/']);
  }
}
