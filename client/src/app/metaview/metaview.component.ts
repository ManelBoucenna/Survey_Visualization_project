// Angular libs
import { Component, OnInit } from '@angular/core';
// Services
import { DrawChartService } from 'src/services/draw-chart.service';
import { DataProvider } from 'src/services/Data_provider.service';
// Data files
import { Question, CreationEntry, Id } from 'src/helpers/types';


@Component({
  selector: 'app-metaview',
  templateUrl: './metaview.component.html',
  styleUrls: ['./metaview.component.css']
})

export class MetaviewComponent implements OnInit {
  metadata: any;
  opened: boolean;
  Data: any;

  constructor(
    public drawChartService: DrawChartService,
    public dataProvider: DataProvider) {
    this.Data = dataProvider.getData();
    this.metadata = this.Data.metadata;
  }

  ngOnInit() {
    this.metadata.forEach(question => {
      const id = Id.New('metaview_' + question.variable, false);
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
}
