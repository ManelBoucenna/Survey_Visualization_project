// Angular libs
import { Component, OnInit } from '@angular/core';
// Services
import { DrawChartService } from 'src/services/draw-chart.service';
// Data files
import { CreationEntry } from 'src/helpers/types';


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
      this.drawChartService.ndx = this.drawChartService.dataManagement.getNdx(data);
      this.drawChartService.metadata.forEach(question => {
        const id = 'metaview_' + question.variable;
        const creationEntry = new CreationEntry(id, [question], true, this.drawChartService.ndx);
        this.drawChartService.DrawVisualizationOverview(creationEntry);
      });
    });
  }
}
