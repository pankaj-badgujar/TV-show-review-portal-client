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

  @Input() analysis: [];

  grade: number;
  isEditing: boolean;
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
    this.feedback = '';
    this.analysisId = 1;
    this.isEditing = false;
    this.gradeValues = Array(100).keys();
    if (this.analysis !== undefined) {
      // @ts-ignore
      this.analysisId = this.analysis[0].id;
      // @ts-ignore
      this.feedback = this.analysis[0].feedback;
      // @ts-ignore
      this.grade = this.analysis[0].grade;
    }
  }

  ngOnInit() {

    this.loggedInUser = this.loginService.getLoggedInUser();

    this.activatedRoute.params.subscribe(params => {
      this.episodeId = params.episodeId;
      this.showId = params.showId;
    });

    // @ts-ignore
    this.reviewService.getReviewsForAnalysisByFaculty(this.loggedInUser.id, this.analysisId)
      .then(review => this.review = review);
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
