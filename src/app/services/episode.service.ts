import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  server = 'http://localhost:8080/';

  constructor() { }

  getEpisodeList = (showId) =>
    fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
      .then(response => response.json())

  getEpisodeInformation = (episodeId) =>
    fetch(`https://api.tvmaze.com/episodes/${episodeId}`)
      .then(response => response.json())


  createEpisodeInDB = (episodeDetails) =>
    fetch(this.server + `api/episode`,{
      method: 'POST',
      body: JSON.stringify(episodeDetails),
      headers: {
        'content-type' : 'application/json'
      }
    }).then();


  deleteEpisodeFromDB = (episodeId) =>
    fetch(`http://localhost:8080/api/episode/${episodeId}`,{
      method: 'DELETE'
    }).then();

}
