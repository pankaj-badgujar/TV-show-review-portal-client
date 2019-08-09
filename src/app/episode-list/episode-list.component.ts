import {Component, OnInit} from '@angular/core';
import {EpisodeService} from "../services/episode.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  showId: number;
  episodes: [];
  noPreviewImage: string;

  constructor(private episodeService: EpisodeService, private activatedRoute: ActivatedRoute) {
    this.noPreviewImage = '/assets/images/No_Image_Available.jpg';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.showId = params.showId;

      this.episodeService.getEpisodeList(this.showId)
        .then(episodes => this.episodes = episodes)

    });
  }


}
