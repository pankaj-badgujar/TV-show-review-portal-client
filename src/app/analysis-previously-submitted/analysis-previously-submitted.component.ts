import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AnalysisService} from "../services/analysis.service";
import {LoginServiceClientService} from "../services/login-service-client.service";
import {StudentService} from "../services/student.service";
import {ShowServiceClientService} from "../services/show-service-client.service";
import {EpisodeService} from "../services/episode.service";

@Component({
  selector: 'app-analysis-previously-submitted',
  templateUrl: './analysis-previously-submitted.component.html',
  styleUrls: ['./analysis-previously-submitted.component.css']
})
export class AnalysisPreviouslySubmittedComponent implements OnInit {

  @Input() episodeId: number;
  @Input() showId: number;
  analysisList: [];
  whoseSubmissions: number;
  loggedInUser: object;
  analysisEdit: boolean;

  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  editedAnalysis: string;


  constructor(private showService: ShowServiceClientService,
              private episodeService: EpisodeService,
              private studentService: StudentService,
              private loginService: LoginServiceClientService,
              private analysisService: AnalysisService) {

    this.analysisEdit = false;

  }

  ngOnInit() {
    this.loggedInUser = this.loginService.getLoggedInUser();

    this.showAppropriateAnalysisList();

    // @ts-ignore
    this.whoseSubmissions =
      // @ts-ignore
      (this.loggedInUser == null || this.loggedInUser.role == "FACULTY") ? 0 : 1


    // // @ts-ignore
    // this.whoseSubmissions = this.loggedInUser.role == "FACULTY" ? 0 : 1;

  }

  showAppropriateAnalysisList() {

    // @ts-ignore
    (this.loggedInUser == null || this.loggedInUser.role == "FACULTY")
      ? this.refreshPreviousAnalysis(this.episodeId)
      : this.showMyAnalysis();

    // // @ts-ignore
    // this.loggedInUser.role == "FACULTY" ? this.refreshPreviousAnalysis(this.episodeId)
    //   : this.showMyAnalysis();

  }

  refreshPreviousAnalysis(episodeId) {
    this.analysisService.findAllAnalysisForEpisode(episodeId)
      .then(analysisList => {
        this.analysisList = analysisList;
      })
  }

  filterMyAnalysis() {
   this.whoseSubmissions == 1? this.refreshPreviousAnalysis(this.episodeId)
     : this.showMyAnalysis()
  }

  showMyAnalysis() {
    // @ts-ignore
    this.analysisService.findAllAnalysisOfStudent(this.loggedInUser.id, this.episodeId)
      .then(analysisList => {
        this.analysisList = analysisList;
        this.analysisList.length > 0 ? this.notify.emit(true)
          : this.notify.emit(false)

      })
  }

  showAnalysisOfMyPupils() {
    alert('hi');
  }


  deleteAnalysis(analysisId) {

    this.analysisService.deleteAnalysis(analysisId)
      .then(() => {
        return this.episodeService.deleteEpisodeFromDB(this.episodeId)
      })
      .then(() => {
        return this.showService.deleteShowFromDB(this.showId)
      })
      .then(() => this.showMyAnalysis());
  }

  editAnalysis(analysis) {
    if (this.analysisEdit) {
      this.analysisService.updateAnalysis(analysis.id,this.editedAnalysis)
        .then(() => {
          this.showMyAnalysis()
        });
    } else {
      this.editedAnalysis = analysis.content;
    }
    this.analysisEdit = !this.analysisEdit;

  }
}
