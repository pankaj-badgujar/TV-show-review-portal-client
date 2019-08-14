import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-saved-show-tile',
  templateUrl: './saved-show-tile.component.html',
  styleUrls: ['./saved-show-tile.component.css']
})
export class SavedShowTileComponent implements OnInit {


  noPreviewImage: any;


  startIndex: number;
  endIndex: number;

  @Input() showsToBeDisplayed : any[];

  @Input() headingToBeDisplayed: any;

  @Input() isSavedShow: boolean;

  showsToBeDisplayedCurrently: any[];

  constructor() {
    this.noPreviewImage = '/assets/images/No_Image_Available.jpg';
    this.startIndex =0;
    this.endIndex = 24;


  }

  ngOnInit() {

    if(this.showsToBeDisplayed !== undefined) {
      this.showsToBeDisplayedCurrently = this.showsToBeDisplayed.slice(this.startIndex, this.endIndex);
    }
  }

  loadTiles = () =>{
    this.showsToBeDisplayedCurrently = this.showsToBeDisplayed.slice(this.startIndex, this.endIndex);
  }

  nextPage = () => {

    this.startIndex = this.startIndex + 24;
    this.endIndex = this.endIndex + 24;
    this.showsToBeDisplayedCurrently = this.showsToBeDisplayed.slice(this.startIndex,this.endIndex);
  };

  previousPage = () => {

    this.startIndex = this.startIndex - 24;
    this.endIndex = this.endIndex - 24;
    this.showsToBeDisplayedCurrently = this.showsToBeDisplayed.slice(this.startIndex,this.endIndex);
  };

}
