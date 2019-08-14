import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor() { }

  getEpisodeList = (showId) =>
    fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
      .then(response => response.json())

  getEpisodeInformation = (episodeId) =>
    fetch(`https://api.tvmaze.com/episodes/${episodeId}`)
      .then(response => response.json())


  createEpisodeInDB = (episodeDetails) =>
    fetch(`http://localhost:8080/api/episode`,{
      method: 'POST',
      body: JSON.stringify(episodeDetails),
      headers: {
        'content-type' : 'application/json'
      }
    }).then()
}
