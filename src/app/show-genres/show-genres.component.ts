import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-genres',
  templateUrl: './show-genres.component.html',
  styleUrls: ['./show-genres.component.css']
})
export class ShowGenresComponent implements OnInit {

  @Input() genre: string;
  constructor() { }

  ngOnInit() {
  }

}
