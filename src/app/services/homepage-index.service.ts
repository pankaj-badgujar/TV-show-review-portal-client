import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageIndexService {

  // server = 'http://localhost:8080/';
  server = 'https://wbdv-su19-java-server-group-13.herokuapp.com/'


  constructor() { }

  fetchShowIndex = (pageNo) =>
    fetch(`https://api.tvmaze.com/shows?page=${pageNo}`)
      .then(response=> response.json());


  fetchParticularShowIndex = (showId) =>
    fetch(`https://api.tvmaze.com/shows/1`)
      .then(response=> response.json());


  fetchShowsAnalysedByStudent = (sid) =>  fetch(this.server + `api/user/analysedShowIds/${sid}`)
    .then(response=> response.json());

  fetchShowsReviewedByFaculty = (fid) =>  fetch(this.server + `api/faculty/showsReviewed/${fid}`)
    .then(response=> response.json());

  fetchShowsToBeReviewedByFaculty = (fid) =>  fetch(this.server + `api/faculty/showsToBeReviewed/${fid}`)
    .then(response=> response.json());
}
