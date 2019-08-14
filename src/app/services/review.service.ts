import { Injectable } from '@angular/core';
import {init} from 'protractor/built/launcher';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  createReview = (userId, analysisId, reviewJSON) =>
    fetch(`http://localhost:8080/api/faculty/${userId}/analysis/${analysisId}/review`,
      {
        method: 'POST',
        body: JSON.stringify(reviewJSON),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => res.json());

  updateReview = (reviewId, reviewJSON) =>
    fetch(`http://localhost:8080/api/review/${reviewId}`,{
      method: 'PUT',
      body: JSON.stringify(reviewJSON),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json());

  deleteReview = (reviewId) =>
    fetch(`http://localhost:8080/api/review/${reviewId}`,{
      method: 'PUT',
    })
      .then(res => res.json());

  getReviewsForAnalysisByFaculty = (facultyId, analysisId) =>
    fetch(`http://localhost:8080/api/faculty/${facultyId}/analysis/${analysisId}/review`)
      .then(res => res.json());
}
