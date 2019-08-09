import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageIndexService {

  constructor() { }

  fetchShowIndex = (pageNo) =>
    fetch(`http://api.tvmaze.com/shows?page=${pageNo}`)
      .then(response=> response.json())
}
