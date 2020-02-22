// Angular Modules
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// Services
import { DrawChartService } from 'src/services/draw-chart.service';
// Interfaces
import { Question, CreationEntry, Id } from 'src/helpers/types';
// library
import * as dc from 'dc';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  selection: any;
  barCharts: Array<any> = [];
  questionnaire: any;
  IdCtrl = new FormControl();
  filteredQuestions: Observable<Question[]>;

  constructor(public drawChartService: DrawChartService) {
    this.questionnaire = this.drawChartService.questionnaire;
    this.filteredQuestions = this.IdCtrl.valueChanges
      .pipe(
        startWith(''),
        map(question => question ? this._filterQuestions(question) : this.drawChartService.questionnaire.slice())
      );
  }
 
  ngOnInit() {
    this.drawChartService.dataManagement.getData().then(data => {
      this.drawChartService.data = data;
      this.drawChartService.ndxOverviewMetadata = this.drawChartService.dataManagement.getNdx(data);
      this.drawChartService.questionnaire.forEach(question => {
        const id = Id.New('overview_' + question.variable, false);
        const questions: Question[] = [question];
        const creationEntry = new CreationEntry(id, questions, true, this.drawChartService.ndxOverviewMetadata);
        this.drawChartService.DrawVisualizationOverview(creationEntry);
      });
    });
  }

  private _filterQuestions(value: string): Question[] {
    const filterValue = value.toLowerCase();
    return this.drawChartService.questionnaire.filter(question => question.question.toLowerCase().indexOf(filterValue) === 0);
  }

  private submit(value: string) {

    const container = document.getElementById('container_' + value);
    container.classList.add('found-highlight');
    setTimeout(() => {
      container.classList.remove('found-highlight');
    }, 750);

  }
  public ResetFilters() {
    console.log("Reset")
    dc.redrawAll();
  }
}
