// Angular libs
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Guid } from 'guid-typescript';

// Data files
import { Task, ValidationStatus } from 'src/helpers/enums';
import { CreationEntry, CardEntry, Id } from 'src/helpers/types';

// Services
import { DrawChartService } from 'src/services/draw-chart.service';
import { SuggestChartService } from 'src/services/suggest-chart.service';
import { CardsCreationService } from 'src/services/cards-creation.service';
import { VisualisationSuggestionValidator } from './../../../services/validators/VisualisationSuggestionValidator';
// Visualization libraries
import { DataProvider } from 'src/services/Data_provider.service';


@Component({
  selector: 'app-suggestion-panel',
  templateUrl: './suggestion-panel.component.html',
  styleUrls: ['./suggestion-panel.component.css']
})
export class SuggestionPanelComponent implements OnInit {

  // Variables to save user choice
  selectedTask: string;
  filteredQuestions: Observable<string[]>;
  selectedQuestions: string[] = [];
  IdQuestions: string[];

  // Variables to create the form
  questionnaire: any = [];
  metadata: any = [];
  questions: any = [];
  tasks: any = Task;
  myControl = new FormControl();
  IdCtrl = new FormControl();


  // Tagging system variables
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  Data: any;
  @ViewChild('questionInput', { static: false }) questionInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(
    private drawChartService: DrawChartService,
    private suggestChartService: SuggestChartService,
    private cardCreationService: CardsCreationService,
    dataProvider: DataProvider
  ) {
    this.Data = dataProvider.getData();
  }

  ngOnInit() {
    this.questionnaire = this.Data.questionnaire;
    this.metadata = this.Data.metadata;
    this.questions = this.questions.concat(this.questionnaire, this.metadata);
    this.IdQuestions = this.questions.map(item => item.question);
    // Check difference between IdQuestions and filteredQuestions
    this.filteredQuestions = this.filterQuestions(this.IdQuestions);
  }




  filterQuestions(Questions: any): Observable<string[]> {
    return this.IdCtrl.valueChanges
      .pipe(
        startWith(null),
        map((question: string | null) => question ? this._filter(question) : Questions.slice()));
  }
  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our question
      if ((value || '').trim()) {
        this.selectedQuestions.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.IdCtrl.setValue(null);
    }
  }
  remove(question: string): void {
    const index = this.selectedQuestions.indexOf(question);
    if (index >= 0) {
      this.selectedQuestions.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedQuestions.push(event.option.viewValue);
    this.questionInput.nativeElement.value = '';
    this.IdCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.IdQuestions.filter(question => question.toLowerCase().indexOf(filterValue) === 0);
  }

  // Steps before output visualization;
  // 1- Get the name of the suggested visualization
  // 2- Create container of visualization
  // 3- Create the schema of the visualization
  AddNode(questions: string[], task: Task): void {

    const validationResults = new VisualisationSuggestionValidator(questions, task['key']).Validate();
    if (validationResults.every(result => result.Result === ValidationStatus.Passed)) {
      const id = Id.New('CardEntry');
      const suggestedVisuallization = this.suggestChartService.SuggestVisualization(questions, task);
      const creationEntries: CreationEntry = this.drawChartService.GetCreationEntries(id, questions);

      const cardEntry: CardEntry = {
        Id: id,
        CreationEntries: creationEntries,
        Visualization: suggestedVisuallization,
        Task: task['key']
      };
      // Create node then add visualization
      this.cardCreationService.createCard(cardEntry).then(() => {
        const observer = new MutationObserver((mutations, me) => {
          const canvas = document.getElementById(cardEntry.Id.Value);
          if (canvas) {
            this.drawChartService.DrawVisualizationDetail(cardEntry.Visualization, cardEntry.CreationEntries);
            me.disconnect(); // stop observing
            return;
          }
        });

        observer.observe(document, {
          childList: true,
          subtree: true
        });
      }
      );
    } else {
      let validationErrors = 'Validation failed:\n';
      validationResults.filter(r => r.Result === ValidationStatus.Failed)
        .forEach(r => validationErrors += (r.Message + '\n'));
      alert(validationErrors);
    }

  }
}
