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
import { DataProvider } from 'src/services/Data_provider.service';

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

  Data: any;

  constructor(
    public drawChartService: DrawChartService,
    dataProvider: DataProvider) {
    this.Data = dataProvider.getData();
    this.questionnaire = this.Data.questionnaire; 
    this.filteredQuestions = this.IdCtrl.valueChanges
      .pipe(
        startWith(''),
        map(question => question ? this._filterQuestions(question) : this.questionnaire.slice())
      );
  }

  ngOnInit() {
    this.questionnaire.forEach(question => {
      const id = Id.New('overview_' + question.variable, false);
      const questions: Question[] = [question];
      const creationEntry = new CreationEntry(id, questions, true, this.Data.ndx);
      const observer = new MutationObserver((mutations, me) => {
        const canvas = document.getElementById(id.Value);
        if (canvas) {
          this.drawChartService.DrawVisualizationOverview(creationEntry);
          me.disconnect(); // stop observing
          return;
        }
      });
      observer.observe(document, {
        childList: true,
        subtree: true
      });
    });
  }

  private _filterQuestions(value: string): Question[] {
    const filterValue = value.toLowerCase();
    return this.questionnaire.filter(question => question.question.toLowerCase().indexOf(filterValue) === 0);
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
    this.drawChartService.ResetFiltersOverview();
  }

}
