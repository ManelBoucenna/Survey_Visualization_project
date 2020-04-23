//Angular libs
import { Injectable } from '@angular/core';
//Data files
import { Task } from '../helpers/enums';
import { SuggestionEntry } from 'src/helpers/types';
//Services
import { VisualizationSuggestorFactory } from './visualization_suggestions/VisualizationSuggestorFactory';


@Injectable({
  providedIn: 'root'
})
export class SuggestChartService {

  constructor() { }

  public SuggestVisualization(questions: string[], task: Task): any {
    const suggestionEntry = new SuggestionEntry(questions, task['key']);
    const suggestion = VisualizationSuggestorFactory.Create(suggestionEntry).Suggest();
    return suggestion;
  }
}
