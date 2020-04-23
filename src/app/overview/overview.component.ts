// Angular Modules
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';// Services
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

  questionnaire: any;
  IdCtrl = new FormControl();
  filteredQuestions: any[];
  filteredQuestions_list: any[] = [];
  Data: any;
  master_checked: boolean = true;
  master_indeterminate: boolean = false;


  constructor(
    public drawChartService: DrawChartService,
    dataProvider: DataProvider,
    public dialog: MatDialog) {
    this.Data = dataProvider.getData();
    this.questionnaire = this.Data.questionnaire;
    this.questionnaire.forEach(element => {
      this.filteredQuestions_list.push({
        name: element.question,
        disabled: false,
        checked: true,
        labelPosition: "after"
      });
      this.filteredQuestions = this.filteredQuestions_list;
    });
  }

  ngOnInit() {
    this.questionnaire.forEach(question => {
      const id = Id.New('overview_' + question.variable, false);
      const questions: Question[] = [question];
      const creationEntry = new CreationEntry(id, questions, true, this.Data.ndx);
      const observer = new MutationObserver((mutations, me) => {
        const canvas = document.getElementById(id.Value);
        if (canvas) {
          this.drawChartService.DrawVisualizationOverview(creationEntry)
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

  master_change() {
    this.filteredQuestions_list.forEach(value => {
      value.checked = this.master_checked;
    });
  }
  list_change() {
    let checked_count = 0;
    //Get total checked items
    for (let value of Object.values(this.filteredQuestions_list)) {
      if (value.checked) { checked_count++; }
    }

    if (checked_count > 0 && checked_count < this.filteredQuestions_list.length) {
      // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
      this.master_indeterminate = true;
    } else if (checked_count == this.filteredQuestions_list.length) {
      //If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
      this.master_indeterminate = false;
      this.master_checked = true;
    } else {
      //If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
      this.master_indeterminate = false;
      this.master_checked = false;
    }
  }

  UpdateQuestions() {
    console.log("Update yaw")
    this.filteredQuestions = this.filteredQuestions_list;
  }

  private _filterQuestions(value: string): Question[] {
    const filterValue = value.toLowerCase();
    return this.questionnaire.filter(question => question.question.toLowerCase().indexOf(filterValue) === 0);
  }

  public submit(value: string) {

    const code = this.questionnaire.filter(question => question.question.indexOf(value) === 0)[0].variable;
    const container = document.getElementById('container_' + code);
    container.classList.add('found-highlight');
    setTimeout(() => {
      container.classList.remove('found-highlight');
    }, 750);

    this.IdCtrl.reset()

  }
  public ResetFilters() {
    this.drawChartService.RedrawVisualizations();
    this.filteredQuestions_list.forEach(value => {
      value.checked = true;
    });
    this.master_checked = true;
    this.master_indeterminate = false;
  }

  sortBy(prop: string) {
    return this.filteredQuestions_list.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  IsChecked(question: string) {
    const value = this.filteredQuestions.filter(data => data.name == question)[0];
    return value.checked;

  }

  OpenData() {
    alert('Data Source: Comparative Study of Electoral Systems Integrated Module Dataset')
  }
}
