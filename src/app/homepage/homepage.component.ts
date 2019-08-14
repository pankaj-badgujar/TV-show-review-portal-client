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
  showIndexCarousel: [];
  analysedShows: any[];
  reviewedShows: any[];
  toBeReviewedShows: any[];
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
        this.showIndex = showIndex


      });

    this.loggedInUser = this.loginClientService.getLoggedInUser();

    if(this.loggedInUser == null || this.loggedInUser === undefined){
      this.loggedInUser = {};
    }

    if(this.loggedInUser != null && this.loggedInUser.role === 'STUDENT'){
      this.homePageIndexService.fetchShowsAnalysedByStudent(this.loggedInUser.id).then(
        shows => {
          this.analysedShows = shows;
          this.savedShowTileComponent.loadTiles();
        }
      );
    }

    else if (this.loggedInUser != null && this.loggedInUser.role === 'FACULTY') {

      this.homePageIndexService.fetchShowsReviewedByFaculty(this.loggedInUser.id).then(
        shows => {
          this.reviewedShows = shows;
          this.savedShowTileComponent.loadTiles();
        }
      );

      this.homePageIndexService.fetchShowsToBeReviewedByFaculty(this.loggedInUser.id).then(
        shows => {
          this.toBeReviewedShows = shows;
          this.savedShowTileComponent.loadTiles();
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


