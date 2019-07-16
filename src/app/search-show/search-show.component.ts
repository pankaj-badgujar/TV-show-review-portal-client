import {Component, OnInit} from '@angular/core';
import {ShowServiceClientService} from '../services/show-service-client.service';

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.css']
})
export class SearchShowComponent implements OnInit {

  keyword: string;
  searchResults: [];

  constructor(private showService: ShowServiceClientService) {
  }

  ngOnInit() {
  }

  searchShow(keyword) {
    this.showService.searchShow(keyword)
      .then(show => {
          this.searchResults = show;
          console.log(this.searchResults);
        }
      );
  }
}
