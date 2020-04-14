import { metadata } from './../assets/data/metadata';
import { questionnaire } from './../assets/data/questionnaire';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';

// Visualization libs
import * as crossfilter from 'crossfilter2/crossfilter';

@Injectable()
export class DataProvider {

    private ndxOverview = null;
    private questionnaire: any = null;
    private metadata: any = null;
    private data: any = null;

    constructor(private http: HttpClient) {

    }

    public getData(): any {
        return {
            ndx: this.ndxOverview,
            questionnaire: this.questionnaire,
            metadata: this.metadata
        };
    }

    public getNewNdx(): any {
        return crossfilter(this.data);
    }

    load() {
        console.log('Data Uploading...')
        this.questionnaire = questionnaire;
        this.metadata = metadata;
        const url = `${Config.apiUrl}/surveyQuestions`;
        return new Promise((resolve, reject) => {
            this.http
                .get(url)
                .subscribe((response: any[]) => {
                    this.data = response;
                    this.ndxOverview = crossfilter<any>(response);
                    console.log('Data Uploaded.');
                    resolve(true);
                });
        });
    }
}
