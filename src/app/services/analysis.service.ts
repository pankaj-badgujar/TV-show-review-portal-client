import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  // server= 'http://localhost:8080/';
  server = 'https://wbdv-su19-java-server-group-13.herokuapp.com/'

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
    fetch(this.server+ `api/episode/${episodeId}/analysis`)
      .then(res => res.json());

  findAllAnalysisOfStudent = (userId, episodeId) =>
    fetch(this.server + `api/user/${userId}/episode/${episodeId}/analysis`)
      .then(res => res.json());

  deleteAnalysis = (analysisId) =>
    fetch(this.server + `analysis/${analysisId}`, {
      method: 'DELETE'
    })
      .then();

  updateAnalysis = (analysisId, content) =>
    fetch(this.server + `analysis/${analysisId}/content/${content}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json());

}
