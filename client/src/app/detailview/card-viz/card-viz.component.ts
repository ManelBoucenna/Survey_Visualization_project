// Angular libs
import { Component, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// Services
import { DrawChartService } from 'src/services/draw-chart.service';
import { CreationEntry } from "src/helpers/types";
import { Visualization, Task } from "src/helpers/enums";
import { CardsCreationService } from 'src/services/cards-creation.service';

@Component({
  selector: 'app-card-viz',
  templateUrl: './card-viz.component.html',
  styleUrls: ['./card-viz.component.css']
})
export class CardVizComponent implements AfterViewInit {
  id: any;
  visualization: Visualization;
  group: string;
  created: boolean;


  constructor(
    private drawChartService: DrawChartService,
    public cardsCreationService: CardsCreationService) {
  }

  ngAfterViewInit(): void {
    // this.drawChartService.DrawVisualizationDetail(this.visualization, this.creationEntries);
  }

  // DestroyComponent(): boolean {
  //   // return this.cardsCreationService.DeleteVisualization(this.id);
  // }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
