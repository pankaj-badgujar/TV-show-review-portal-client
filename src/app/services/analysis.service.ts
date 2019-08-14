import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  server= 'http://localhost:8080/';

  constructor() {
  }

  createAnalysis = (userId, showId, episodeId, analysisJSON) =>
    fetch(this.server + `api/user/${userId}/show/${showId}/episode/${episodeId}/analysis`,
      {
        method: 'POST',
        body: JSON.stringify(analysisJSON),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => res.json());

  findAllAnalysisForEpisode = (episodeId) =>
    fetch(`http://localhost:8080/api/episode/${episodeId}/analysis`)
      .then(res => res.json());

  findAllAnalysisOfStudent = (userId,episodeId) =>
    fetch(`http://localhost:8080/api/user/${userId}/episode/${episodeId}/analysis`)
      .then(res => res.json());


}
