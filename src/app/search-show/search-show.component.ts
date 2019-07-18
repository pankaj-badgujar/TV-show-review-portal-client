import {Component, OnInit} from '@angular/core';
import {ShowServiceClientService} from '../services/show-service-client.service';

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.css']
})
export class SearchShowComponent implements OnInit {

  keyword: string;
  shouldShowResults = false;
  searchResults: [];

  constructor(private showService: ShowServiceClientService) {
  }

  ngOnInit() {
  }

  searchShow(keyword) {

    if (keyword.trim() === '') {
      this.shouldShowResults = false;
    }
    if (keyword.trim() !== '') {
      this.showService.searchShow(keyword)
        .then(show => {
            this.shouldShowResults = true;
            this.searchResults = show;
            console.log(this.searchResults);
          }
        );
    }
  }
}
