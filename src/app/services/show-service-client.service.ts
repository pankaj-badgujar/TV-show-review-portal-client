import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowServiceClientService {

  constructor() { }

  searchShow = (keyword) =>
    fetch(`http://api.tvmaze.com/search/shows?q=${keyword}`)
      .then(response => response.json())


}
