import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor() { }

  createAnalysis = (userId,showId,episodeId,analysisJSON) =>
    fetch(`http://localhost:8080/api/
    user/${userId}/tvshow/${showId}/episode/${episodeId}/analysis`,{
      method: 'POST',
      body: JSON.stringify(analysisJSON),
      headers: {
        'content-type' : 'application/JSON'
      }
    })
      .then()
}
