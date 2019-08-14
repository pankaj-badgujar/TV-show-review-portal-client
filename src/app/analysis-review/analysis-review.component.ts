import {Component, Input, OnInit} from '@angular/core';
import {LoginServiceClientService} from "../services/login-service-client.service";
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-analysis-review',
  templateUrl: './analysis-review.component.html',
  styleUrls: ['./analysis-review.component.css']
})
export class AnalysisReviewComponent implements OnInit {

  @Input() analysis: [];

  grade: number;
  feedback: string;
  episodeId: number;
  showId: number;
  loggedInUser: object;
  review: object;
  analysisId: number;
  gradeValues: Iterable<number>;

  constructor(private activatedRoute: ActivatedRoute,
              private loginService: LoginServiceClientService,
              private reviewService: ReviewService) {
    this.grade = 0;
    this.feedback = "";
    this.analysisId = 0;
    this.gradeValues = Array(100).keys();
    if (this.analysis !== undefined) {
      this.analysisId = this.analysis[0].id;
      this.feedback = this.analysis[0].feedback;
      this.grade = this.analysis[0].grade;
    }
  }

  ngOnInit() {

    this.loggedInUser = this.loginService.getLoggedInUser();

    this.activatedRoute.params.subscribe(params => {
      this.episodeId = params.episodeId;
      this.showId = params.showId;
    });

    this.reviewService.getReviewsForAnalysisByFaculty(this.loggedInUser.id, this.analysisId)
      .then(review => this.review = review);
  }

  submitReview() {

    const reviewJSON = {
      "feedback" : this.feedback,
      "grade" : this.grade
    };

    this.reviewService.createReview(this.loggedInUser.id, this.analysisId, reviewJSON)
      .then(review => this.review = review);
  }

  updateReview() {

    this.review.grade = this.grade;
    this.review.feedback = this.feedback;

    this.reviewService.updateReview(this.review.id, this.review)
      .then(review => this.review = review);
  }
}
