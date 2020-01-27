//  Angular libs
import { Component, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// Services
import { DrawChartService } from 'src/services/draw-chart.service';

@Component({
  selector: 'app-card-viz',
  templateUrl: './card-viz.component.html',
  styleUrls: ['./card-viz.component.css']
})
export class CardVizComponent implements AfterViewInit {
  id: any;
  task: string;
  visualization: any;
  variable: string;
  creationEntries: any;
  created: boolean;

  constructor(
    private drawChartService: DrawChartService,
    public dialog: MatDialog) {
  }

  ngAfterViewInit(): void {
    this.drawChartService.DrawVisualizationDetail(this.visualization, this.creationEntries);
  }

  DestroyComponent(): boolean {
    this.created = false;
    return true;
  }

  OpenZoom(): void {
    window.alert('Allo');
  }

}
