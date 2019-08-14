import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-analysis-review',
  templateUrl: './analysis-review.component.html',
  styleUrls: ['./analysis-review.component.css']
})
export class AnalysisReviewComponent implements OnInit {

  @Input() episodeId: Number;

  constructor() { }

  ngOnInit() {
  }

}
