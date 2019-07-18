import {Component, Input, OnInit} from '@angular/core';
import {ShowServiceClientService} from "../services/show-service-client.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.css']
})
export class ResultGridComponent implements OnInit {

  noPreviewImage: string;

  searchResults = [];
  // @Input() searchResults: any;
  // @Input() keyword: any;
  query: '';

  constructor(private showService: ShowServiceClientService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.noPreviewImage = '/assets/images/No_Image_Available.jpg';

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.query = params.query;
        if(this.query != null) {
          this.showService.searchShow(this.query)
              .then(show => {
                  this.searchResults = show;
                  console.log(this.searchResults);
                }
              );
        }
      }
    );
  }

  getDetails(result){
    this.router.navigate([
      '/',
      'search',
      this.query,
      'details',
      result.show.id
    ]);
  }

}
