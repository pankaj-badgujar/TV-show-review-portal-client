import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-tile',
  templateUrl: './show-tile.component.html',
  styleUrls: ['./show-tile.component.css']
})
export class ShowTileComponent implements OnInit {

  @Input() show: any;
  constructor() { }

  ngOnInit() {
  }

}
