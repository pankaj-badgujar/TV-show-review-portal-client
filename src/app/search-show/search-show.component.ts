import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  query: '';

  constructor(private showService: ShowServiceClientService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.keyword = params.query;
        // if(this.query != null) {
        //   this.searchShow(this.query);
        // }
      }
    );
  }

  searchShow(keyword) {
    if (keyword !== undefined && keyword.trim() !== '') {
      this.router.navigate([
        '/',
        'search',
        keyword
      ]);

    }
  }
}
