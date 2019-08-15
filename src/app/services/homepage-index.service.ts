import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageIndexService {

  server = 'http://localhost:8080/';

  constructor() { }

  fetchShowIndex = (pageNo) =>
    fetch(`http://api.tvmaze.com/shows?page=${pageNo}`)
      .then(response=> response.json());


  fetchParticularShowIndex = (showId) =>
    fetch(`http://api.tvmaze.com/shows/1`)
      .then(response=> response.json());


  fetchShowsAnalysedByStudent = (sid) =>  fetch(this.server + `api/user/analysedShowIds/${sid}`)
    .then(response=> response.json());

  fetchShowsReviewedByFaculty = (fid) =>  fetch(this.server + `api/faculty/showsReviewed/${fid}`,{
    mode: 'no-cors'
  })
    .then(response=> response.json());

  fetchShowsToBeReviewedByFaculty = (fid) =>  fetch(this.server + `api/faculty/showsToBeReviewed/${fid}`,{
    mode: 'no-cors'
  })
    .then(response=> response.json());
}
