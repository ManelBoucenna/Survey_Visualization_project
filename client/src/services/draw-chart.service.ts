import { Guid } from 'guid-typescript';
// Angular libs
import { Injectable } from '@angular/core';

// Data files
import { CreationEntry, Question, Id } from './../helpers/types';
import { Visualization } from '../helpers/enums';
import { allData } from 'src/assets/data/allData';

// Services
import { DataManagementService } from './data-management.service';
import { VisualizationDrawerFactory } from './visualization_creation/VisualizationCreatorFactory';

import { NotficationService } from 'src/services/notification-service';


@Injectable({
  providedIn: 'root'
})
export class DrawChartService {

  questionnaire: any;
  metadata: any;
  data: any;
  public ndxOverviewMetadata: any;

  constructor(
    private notficationService: NotficationService,
    public dataManagement: DataManagementService) {
    this.questionnaire = dataManagement.getQuestionnaire();
    this.metadata = dataManagement.getMetaData();
  }


  public ResetFiltersOverview(): boolean {
    this.ndxOverviewMetadata.remove();
    return true;
  }
  /*
  * @method DrawVisualizationOverview: Suggest visualization for Overview part
                                       based on type of question. We draw one question
                                       at the time .
  * @param {CreationEntry}: Input of questions
  * @return {boolean}: true when done
*/
  public DrawVisualizationOverview(creationEntries: CreationEntry): boolean {
    if (creationEntries.Questions[0].category === 'Multiple choices') {
      return VisualizationDrawerFactory.Create(Visualization.BarChart, creationEntries, this.notficationService).Draw();
    } else if (creationEntries.Questions[0].category === 'Numerical') {
      return VisualizationDrawerFactory.Create(Visualization.LineChart, creationEntries, this.notficationService).Draw();
    } else {
      return VisualizationDrawerFactory.Create(Visualization.BoxChart, creationEntries, this.notficationService).Draw();
    }
  }

  /*
  * @method DrawVisualizationDetail: Draw visualization based on suggested vis.
  * @param {Visualization}: Suggested visualization
  * @param {CreationEntry}: Input to draw the viz
  * @return {boolean}: true when done
*/

  public DrawVisualizationDetail(visualizationName: Visualization, creationEntries: CreationEntry): any {
    return VisualizationDrawerFactory.Create(visualizationName, creationEntries, this.notficationService).Draw();
  }

  /*
  * @method GetCreationEntries: Is used to assign variables of type string
                                to their respective object of type Question
                                and then create a CreationEntry object used
                                for the visualization
  * @param {String[]}: Input of questions
  * @return {CreationEntry}: Object used to draw the visualization
  */
  public GetCreationEntries(id: Id, questions: string[]): CreationEntry {
    const questionEntries: Question[] = [];
    const Overview = false;
    const ndx = this.dataManagement.getNdx(this.data);
    const DataPlusMeta: any = allData;
    questions.forEach(element => {
      questionEntries.push(DataPlusMeta.filter(q => q.variable === element)[0]);
    });
    const creationEntries: CreationEntry = new CreationEntry(id, questionEntries, Overview, ndx);

    return creationEntries;
  }
}
