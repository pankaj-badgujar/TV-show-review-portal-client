import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageIndexService {

  constructor() { }

  fetchShowIndex = (pageNo) =>
    fetch(`http://api.tvmaze.com/shows?page=${pageNo}`)
      .then(response=> response.json());


  fetchParticularShowIndex = (showId) =>
    fetch(`http://api.tvmaze.com/shows/1`)
      .then(response=> response.json());


  fetchShowsAnalysedByStudent = (sid) =>  fetch(`http://localhost:8080/api/user/analysedShowIds/${sid}`)
    .then(response=> response.json());

  fetchShowsReviewedByFaculty = (fid) =>  fetch(`http://localhost:8080/api/faculty/showsReviewed/${fid}`,{
    mode: 'no-cors'
  })
    .then(response=> response.json());

  fetchShowsToBeReviewedByFaculty = (fid) =>  fetch(`http://localhost:8080/api/faculty/showsToBeReviewed/${fid}`,{
    mode: 'no-cors'
  })
    .then(response=> response.json());
}
