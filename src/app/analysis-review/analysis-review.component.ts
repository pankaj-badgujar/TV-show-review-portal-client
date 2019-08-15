import {Component, Input, OnInit} from '@angular/core';
import {LoginServiceClientService} from '../services/login-service-client.service';
import {ActivatedRoute} from '@angular/router';
import {ReviewService} from '../services/review.service';

@Component({
  selector: 'app-analysis-review',
  templateUrl: './analysis-review.component.html',
  styleUrls: ['./analysis-review.component.css']
})
export class AnalysisReviewComponent implements OnInit {

   analysis: object;

  grade: number;
  isEditing: boolean;
  feedback: string;
  episodeId: number;
  showId: number;
  loggedInUser: object;
  review: object;
  @Input() analysisId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private loginService: LoginServiceClientService,
              private reviewService: ReviewService) {
    this.grade = 0;
    this.feedback = '';
    // @ts-ignore
    this.isEditing = false;
    // if (this.analysis !== undefined) {
    //   // @ts-ignore
    //   this.analysisId = this.analysis.id;
    //   // @ts-ignore
    //   this.grade = this.review.grade;
    // }
    if (this.review !== undefined) {
      // @ts-ignore
      this.feedback = this.review.feedback;
    }
  }

  ngOnInit() {

    this.loggedInUser = this.loginService.getLoggedInUser();

    this.activatedRoute.params.subscribe(params => {
      this.episodeId = params.episodeId;
      this.showId = params.showId;
    });

    // @ts-ignore
    if (this.loggedInUser.role === 'FACULTY') {
      // @ts-ignore
      this.reviewService.getReviewsForAnalysisByFaculty(this.loggedInUser.id, this.analysisId)
        .then(review => {
          this.review = review;
          this.feedback = review.feedback;
        });
    } else {
      this.reviewService.getReviewsForAnalysisId(this.analysisId)
        .then(review => {
          this.review = review;
          this.feedback = review.feedback;
        });
    }
  }

  submitReview() {

    if (this.isEditing === true) {
      this.updateReview();
    } else {
      const reviewJSON = {
        'feedback': this.feedback,
        'grade': this.grade
      };

      // @ts-ignore
      this.reviewService.createReview(this.loggedInUser.id, this.analysisId, reviewJSON)
        .then(review => this.review = review);
    }
  }
  deleteReview() {
    // @ts-ignore
    this.reviewService.deleteReview(this.review.id).then(res => this.review = null);
    this.feedback = '';
    this.review = null;
  }
  updateReview() {
    // @ts-ignore
    this.review.grade = this.grade;
    // @ts-ignore
    this.review.feedback = this.feedback;

    // @ts-ignore
    this.reviewService.updateReview(this.review.id, this.review)
      .then(review => this.review = review);
    this.isEditing = false;
  }

  allowEditing() {
    this.isEditing = true;
  }
}
