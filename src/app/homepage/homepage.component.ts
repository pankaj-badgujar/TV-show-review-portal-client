import {Component, OnInit} from '@angular/core';
import {HomepageIndexService} from "../services/homepage-index.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  showIndex: [];
  showIndexCarousel: []
  pageNo: number;
  noPreviewImage: string;

  constructor(private homePageIndexService: HomepageIndexService) {
    this.noPreviewImage = '/assets/images/No_Image_Available.jpg';
  }

  ngOnInit() {

    this.pageNo = 0;
    this.homePageIndexService.fetchShowIndex(this.pageNo)
      .then(showIndex => {
        this.showIndex = showIndex
        this.showIndexCarousel= showIndex.slice(0,6);

      })

  }

  nextPage = () => {
    this.pageNo = this.pageNo + 1;
    this.homePageIndexService.fetchShowIndex(this.pageNo)
      .then(showIndex => this.showIndex = showIndex)
  };

  previousPage = () => {
    this.pageNo = this.pageNo - 1;
    this.homePageIndexService.fetchShowIndex(this.pageNo)
      .then(showIndex => this.showIndex = showIndex)
  }
}
