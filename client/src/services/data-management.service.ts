//Angular libraries
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Data files
import { questionnaire } from '../assets/data/questionnaire';
import { metadata } from '../assets/data/metadata';
import { Config } from './config';

//Visualization libs
import * as crossfilter from 'crossfilter';

@Injectable({
  providedIn: 'root'
})

export class DataManagementService {

  constructor(public http: HttpClient) { }

  public getQuestionnaire(): any {
    return questionnaire;
  }

  public getMetaData(): any {
    return metadata;
  }
  public getData(): Promise<any> {
    const url = `${Config.apiUrl}/surveyQuestions`;
    return this.http.get(url)
      .toPromise()
      .then(data => data)
      .catch((error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
      });
  }
  // Gets answers of specific question
  // @returns {promise}   A promise that contains these answers:
  //                       - field: indicates the specific ;

  public getQuestion(questionName: string): Promise<any> {
    const url = `${Config.apiUrl}/surveyQuestions/${questionName}`;
    return this.http.get(url)
      .toPromise()
      .then(data => data)
      .catch((error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
      });
  }

  public getOptions(Options: any): any {
    const options: Array<string> = [];
    Object.keys(Options).forEach(key => {
      options.push(Options[key]);
    });
    return options;
  }

  public getNdx(data: any): any {
    return crossfilter(data);
  }
}
