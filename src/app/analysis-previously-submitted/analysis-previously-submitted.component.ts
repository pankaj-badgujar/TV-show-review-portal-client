import {Component, Input, OnInit} from '@angular/core';
import {AnalysisService} from "../services/analysis.service";
import {LoginServiceClientService} from "../services/login-service-client.service";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-analysis-previously-submitted',
  templateUrl: './analysis-previously-submitted.component.html',
  styleUrls: ['./analysis-previously-submitted.component.css']
})
export class AnalysisPreviouslySubmittedComponent implements OnInit {

  @Input() episodeId: Number;
  analysisList: [];
  whoseSubmissions: Number;
  loggedInUser: Number;

  constructor(private studentService: StudentService,
              private loginService: LoginServiceClientService,
              private analysisService: AnalysisService) {
    this.whoseSubmissions = 0;
  }

  ngOnInit() {
    this.loggedInUser = this.loginService.getLoggedInUser();
    this.refreshPreviousAnalysis(this.episodeId);
  }

  refreshPreviousAnalysis(episodeId) {
    this.analysisService.findAllAnalysisForEpisode(episodeId)
      .then(analysisList => {
        this.analysisList = analysisList;
      })
  }

  filterMyAnalysis() {
    this.whoseSubmissions == 1 ? this.refreshPreviousAnalysis(this.episodeId)
      : this.showMyAnalysis();
  }

  showMyAnalysis() {
    // @ts-ignore
    this.analysisService.findAllAnalysisOfStudent(this.loggedInUser.id, this.episodeId)
      .then(analysisList => this.analysisList = analysisList)
  }



}
