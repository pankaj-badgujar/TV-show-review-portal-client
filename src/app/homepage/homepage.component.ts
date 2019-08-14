import {Component, OnInit, ViewChild} from '@angular/core';
import {HomepageIndexService} from "../services/homepage-index.service";
import {Router} from "@angular/router";
import {LoginServiceClientService} from "../services/login-service-client.service";
import {SavedShowTileComponent} from "../saved-show-tile/saved-show-tile.component";
import {AnalysisPreviouslySubmittedComponent} from "../analysis-previously-submitted/analysis-previously-submitted.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  showIndex: [];
  showIndexCurrently: any[];
  showIndexCarousel: [];
  analysedShows: any[];
  analysedShowsCurrently: any[];

  reviewedShows: any[];
  reviewedShowsCurrently: any[];
  toBeReviewedShows: any[];
  toBeReviewedShowsCurrently: any[];

  pageNo: number;
  noPreviewImage: string;
  loggedInUser: any;

  @ViewChild(SavedShowTileComponent, {static: false})
  savedShowTileComponent: SavedShowTileComponent;

  constructor(private homePageIndexService: HomepageIndexService,
              private router: Router, private loginClientService: LoginServiceClientService) {
    this.noPreviewImage = '/assets/images/No_Image_Available.jpg';
  }

  ngOnInit() {

    this.pageNo = 0;
    this.showIndex = [];
    this.analysedShows = [];
    this.reviewedShows = [];
    this.toBeReviewedShows = [];

    this.homePageIndexService.fetchShowIndex(this.pageNo)
      .then(showIndex => {
        this.showIndex = showIndex;

        this.showIndexCurrently = showIndex.slice(0,24);

      });

    this.loggedInUser = this.loginClientService.getLoggedInUser();

    if(this.loggedInUser == null || this.loggedInUser === undefined){
      this.loggedInUser = {};
    }

    if(this.loggedInUser != null && this.loggedInUser.role === 'STUDENT'){
      this.homePageIndexService.fetchShowsAnalysedByStudent(this.loggedInUser.id).then(
        shows => {
          this.analysedShows = shows;
          this.analysedShowsCurrently = shows.slice(0,24);
        }
      );
    }

    else if (this.loggedInUser != null && this.loggedInUser.role === 'FACULTY') {

      this.homePageIndexService.fetchShowsReviewedByFaculty(this.loggedInUser.id).then(
        shows => {
          this.reviewedShows = shows;
          this.reviewedShowsCurrently = shows.slice(0,24);
        }
      );

      this.homePageIndexService.fetchShowsToBeReviewedByFaculty(this.loggedInUser.id).then(
        shows => {
          this.toBeReviewedShows = shows;
          this.toBeReviewedShowsCurrently = shows.slice(0,24);
        }
      );
    }

  }

  nextPage = () => {
    this.pageNo = this.pageNo + 1;
    this.homePageIndexService.fetchShowIndex(this.pageNo)
      .then(showIndex => this.showIndex = showIndex.slice(0, 50))
  };

  previousPage = () => {
    this.pageNo = this.pageNo - 1;
    this.homePageIndexService.fetchShowIndex(this.pageNo)
      .then(showIndex => this.showIndex = showIndex.slice(0, 50))
  }
}


