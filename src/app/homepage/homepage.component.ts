import {Component, OnInit} from '@angular/core';
import {HomepageIndexService} from "../services/homepage-index.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  showIndex: [];
  pageNo: number;


  constructor(private homePageIndexService: HomepageIndexService) {
  }

  ngOnInit() {

    this.pageNo = 0;
    this.homePageIndexService.fetchShowIndex(this.pageNo)
      .then(showIndex => this.showIndex = showIndex)

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
