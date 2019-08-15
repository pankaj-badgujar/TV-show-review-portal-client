import {Component, OnInit, ViewChild} from '@angular/core';
import {EpisodeService} from "../services/episode.service";
import {ActivatedRoute} from "@angular/router";
import {LoginServiceClientService} from "../services/login-service-client.service";
import {AnalysisService} from "../services/analysis.service";
import {AnalysisPreviouslySubmittedComponent} from "../analysis-previously-submitted/analysis-previously-submitted.component";

@Component({
  selector: 'app-analysis-editor',
  templateUrl: './analysis-editor.component.html',
  styleUrls: ['./analysis-editor.component.css']
})
export class AnalysisEditorComponent implements OnInit {

  episode: object;
  episodeId: number;
  showId: Number;
  noPreviewImage: string;
  loggedInUser: object;

  content: String;
  
  @ViewChild(AnalysisPreviouslySubmittedComponent, {static: false})
  previousAnalysisComponent: AnalysisPreviouslySubmittedComponent;

  constructor(private loginService: LoginServiceClientService,
              private episodeService: EpisodeService,
              private analysisService: AnalysisService,
              private activatedRoute: ActivatedRoute) {

    this.noPreviewImage = '/assets/images/No_Image_Available.jpg';
  }

  ngOnInit() {
    this.loggedInUser = this.loginService.getLoggedInUser();

    this.activatedRoute.params.subscribe(params => {
      this.episodeId = params.episodeId;
      this.showId = params.showId;
    });

    this.episodeService.getEpisodeInformation(this.episodeId)
      .then(episode => this.episode = episode);
  }

  submitAnalysis() {

    let analysisJSON = {
      "content": this.content,
    };

    let episodeJSON = {
      "id" : this.episodeId,
      "showId" : this.showId
    };

    this.episodeService.createEpisodeInDB(episodeJSON)
      .then(() => {

        // @ts-ignore
        this.analysisService.createAnalysis(this.loggedInUser.id, this.episodeId, analysisJSON)
          .then(() => {
            this.content = '';
            this.previousAnalysisComponent.refreshPreviousAnalysis(this.episodeId);

          });

      });

  }
}
