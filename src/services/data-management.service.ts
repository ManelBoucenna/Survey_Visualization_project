//Angular libraries
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataManagementService {

  constructor(public http: HttpClient) {}

  // public getQuestionnaire(): any {
  //   return questionnaire;
  // }

  // public getMetaData(): any {
  //   return metadata;
  // }
  // public getData(): Promise<any> {
  //   const url = `${Config.apiUrl}/surveyQuestions`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(data => data)
  //     .catch((error) => {
  //       console.log('Promise rejected with ' + JSON.stringify(error));
  //     });
  // }
  // public getNdx(data: any): any {
  //   return  crossfilter(data);
  // }
}
