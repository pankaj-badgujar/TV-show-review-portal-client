import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowServiceClientService} from "../services/show-service-client.service";

@Component({
  selector: 'app-show-detail-viewer',
  templateUrl: './show-detail-viewer.component.html',
  styleUrls: ['./show-detail-viewer.component.css']
})
export class ShowDetailViewerComponent implements OnInit {

  showId: '';
  showDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private showService: ShowServiceClientService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.showId = params.showId;

        this.showService.getShowDetails(this.showId)
          .then(showDetails => {
            this.showDetails = showDetails;
          });

    }
    );
  }

}
