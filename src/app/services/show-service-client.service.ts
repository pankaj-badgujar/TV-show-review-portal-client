import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowServiceClientService {


  // server = 'http://localhost:8080/';
  server = 'http://wbdv-su19-java-server-group-13.herokuapp.com/'


  constructor() {
  }

  searchShow = (keyword) =>
    fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`)
      .then(response => response.json());


  getShowDetails = (showId) =>
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json());

  addShowInDB = (show) =>
    fetch(this.server + `api/show`, {
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

