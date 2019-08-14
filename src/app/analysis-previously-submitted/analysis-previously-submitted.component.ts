import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AnalysisService} from "../services/analysis.service";
import {LoginServiceClientService} from "../services/login-service-client.service";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-analysis-previously-submitted',
  templateUrl: './analysis-previously-submitted.component.html',
  styleUrls: ['./analysis-previously-submitted.component.css']
})
export class AnalysisPreviouslySubmittedComponent implements OnInit {

  @Input() episodeId: number;
  analysisList: [];
  whoseSubmissions: number;
  loggedInUser: object;

  constructor(private studentService: StudentService,
              private loginService: LoginServiceClientService,
              private analysisService: AnalysisService) {

  }

  ngOnInit() {
    this.loggedInUser = this.loginService.getLoggedInUser();

      // @ts-ignore
      this.loggedInUser.role == "FACULTY" ? this.refreshPreviousAnalysis(this.episodeId)
        :this.showMyAnalysis();

    // @ts-ignore
    this.whoseSubmissions = this.loggedInUser.role == "FACULTY" ? 0 : 1;

  }

  refreshPreviousAnalysis(episodeId) {
    this.analysisService.findAllAnalysisForEpisode(episodeId)
      .then(analysisList => {
        console.log(analysisList);
        this.analysisList = analysisList;
      })
  }

  filterMyAnalysis() {
    switch(this.whoseSubmissions){
      case 1:
        this.showMyAnalysis();
        break;
      case 2:
        this.refreshPreviousAnalysis(this.episodeId);
        break;
      case 0:
        this.showAnalysisOfMyPupils();
        break;
      default:

    }
  }

  showMyAnalysis() {
    // @ts-ignore
    this.analysisService.findAllAnalysisOfStudent(this.loggedInUser.id, this.episodeId)
      .then(analysisList => this.analysisList = analysisList)
  }

  showAnalysisOfMyPupils(){
    alert('hi');
  }


}
