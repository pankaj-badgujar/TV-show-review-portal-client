import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.css']
})
export class ResultGridComponent implements OnInit {

  noPreviewImage: string;
  @Input() searchResults: any;

  constructor() {
    this.noPreviewImage = '/assets/images/No_Image_Available.jpg';
  }

  ngOnInit() {
  }

}
