// Angular libs
import { Component, OnInit } from '@angular/core';
// Services
import { DrawChartService } from 'src/services/draw-chart.service';
// Data files
import { CreationEntry, Id } from 'src/helpers/types';


@Component({
  selector: 'app-metaview',
  templateUrl: './metaview.component.html',
  styleUrls: ['./metaview.component.css']
})

export class MetaviewComponent implements OnInit {
  metadata: any;
  opened: boolean;

  constructor(public drawChartService: DrawChartService) {
    this.metadata = this.drawChartService.metadata;
  }

  ngOnInit() {
    this.drawChartService.dataManagement.getData().then(data => {
      this.drawChartService.data = data;
      // this.drawChartService.ndxOverviewMetadata = this.drawChartService.ndxOverviewMetadata;
      this.drawChartService.metadata.forEach(question => {
        const id = Id.New('metaview_' + question.variable, false);
        const creationEntry = new CreationEntry(id, [question], true, this.drawChartService.ndxOverviewMetadata);
        this.drawChartService.DrawVisualizationOverview(creationEntry);
      });
    });
  }
}
