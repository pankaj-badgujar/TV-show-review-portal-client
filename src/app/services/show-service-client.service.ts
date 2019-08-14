import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowServiceClientService {


  constructor() {
  }

  searchShow = (keyword) =>
    fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`)
      .then(response => response.json());


  getShowDetails = (showId) =>
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json());

  addShowInDB = (show) =>
    fetch(`http://localhost:8080/api/show`, {
      method: 'POST',
      body: JSON.stringify(show),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());

  deleteShowFromDB = (showId) =>
  fetch(`http://localhost:8080/api/show/${showId}`,{
    method: 'DELETE'
  }).then();

}

