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
<<<<<<< HEAD
      .then(response => response.json())
=======
      .then(response => response.json());


  createEpisodeInDB = (episodeDetails) =>
    fetch(`http://localhost:8080/api/episode`,{
      method: 'POST',
      body: JSON.stringify(episodeDetails),
      headers: {
        'content-type' : 'application/json'
      }
    }).then()
>>>>>>> 72bbdd5904a667c79d77223602750cac863baac3
}
