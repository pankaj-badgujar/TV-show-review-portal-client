import { Injectable } from '@angular/core';
import {init} from 'protractor/built/launcher';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  server = 'http://localhost:8080/';

  constructor() { }

  createReview = (userId, analysisId, reviewJSON) =>
    fetch(this.server +`api/faculty/${userId}/analysis/${analysisId}/review`,
      {
        method: 'POST',
        body: JSON.stringify(reviewJSON),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => res.json());

  updateReview = (reviewId, reviewJSON) =>
    fetch(this.server + `api/review/${reviewId}`,{
      method: 'PUT',
      body: JSON.stringify(reviewJSON),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json());

  deleteReview = (reviewId) =>
    fetch(this.server + `api/review/${reviewId}`,{
      method: 'DELETE',
    })
      .then(res => res.json());

  getReviewsForAnalysisByFaculty = (facultyId, analysisId) =>
    fetch(this.server + `api/faculty/${facultyId}/analysis/${analysisId}/review`)
      .then(res => res.json());

  getReviewsForAnalysisId = (analysisId) =>
    fetch(this.server + `api/analysis/${analysisId}/review`)
      .then(res => res.json());

  getReviewsByFaculty = (userId) =>
    fetch(this.server + `api/review/${userId}`)
      .then((res) => {
        return res.text()
      })
      .then((text) => text.length ? JSON.parse(text) : null);
}
