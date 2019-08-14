import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EpisodeService} from "../services/episode.service";
import {LoginServiceClientService} from "../services/login-service-client.service";

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  showId: number;
  episodes: [];
  noPreviewImage: string;
  loggedInUser: object;

  constructor(private episodeService: EpisodeService,
              private activatedRoute: ActivatedRoute,
              private loginService: LoginServiceClientService) {
    this.noPreviewImage = '/assets/images/No_Image_Available.jpg';
  }

  ngOnInit() {
    this.loggedInUser = this.loginService.getLoggedInUser();

    this.activatedRoute.params.subscribe(params => {
      this.showId = params.showId;

      this.episodeService.getEpisodeList(this.showId)
        .then(episodes => this.episodes = episodes)

    });
  }


}
