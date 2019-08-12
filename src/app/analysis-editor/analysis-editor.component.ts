import {Component, OnInit} from '@angular/core';
import {EpisodeService} from "../services/episode.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-analysis-editor',
  templateUrl: './analysis-editor.component.html',
  styleUrls: ['./analysis-editor.component.css']
})
export class AnalysisEditorComponent implements OnInit {

  episode: object;
  episodeId: number;
  noPreviewImage: string;

  constructor(private episodeService: EpisodeService,
              private activatedRoute: ActivatedRoute) {
    this.noPreviewImage = '/assets/images/No_Image_Available.jpg';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.episodeId = params.episodeId
    });

    this.episodeService.getEpisodeInformation(this.episodeId)
      .then(episode => this.episode = episode);
  }

}
