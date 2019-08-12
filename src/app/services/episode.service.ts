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
}
