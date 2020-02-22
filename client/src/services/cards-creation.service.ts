import { Injectable, ComponentFactoryResolver, } from '@angular/core';
import { CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// Data files
import { CardEntry, Id } from 'src/helpers/types';
//services
import { DrawChartService } from 'src/services/draw-chart.service';
import { DataManagementService } from 'src/services/data-management.service';
@Injectable(
  {
    providedIn: 'root'
  }
)

export class CardsCreationService {
  container: any[] = [];

  constructor(
    private drawChartService: DrawChartService,
    private dataManagementService: DataManagementService) { }

  public createCard(cardEntry: CardEntry): Promise<any> {
    return new Promise(
      (resolve, reject) => {
        this.container.push([cardEntry]);
        console.log("Created element");
        console.log(this.container);
        resolve(this.container);
      }
    );
  }

  public createGroup() {
    this.container.push([]);
  }

  public moveCard(event: CdkDragDrop<CardEntry[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex,event.currentIndex);
      this.UpdateGroupVizs(event.container.data);
    }
    this.removeEmptyGroups();
  }

  public removeCard(cardEntry: CardEntry) {
    this.container.forEach((g, index) => {
      // if element is single card
      if (g.length === 1) {
        if (g[0] === cardEntry) {
          this.container.splice(index, 1);
          return;
        }
      } else {
        // if element is a group
        if (g.includes(cardEntry)) {
          this.container[index].splice(g.indexOf(cardEntry), 1);
          return;
        }
      }
    }
    );
  }

  public removeEmptyGroups() {
    for (let i = 0; i < this.container.length; i++) {
      console.log(this.container[i]);
      if (this.container[i].length === 0) {
        this.container.splice(i, 1);
        i--;
      }
    }
  }


  public UpdateGroupVizs(group: any) {
    const NewNdx = this.dataManagementService.getNdx(this.drawChartService.data);
    group.forEach(elem => {
      const observer = new MutationObserver((mutations, me) => {
        const canvas = document.getElementById(elem.Id.Value);
        if (canvas) {
          elem.CreationEntries.ndx = NewNdx;
          this.drawChartService.DrawVisualizationDetail(elem.Visualization, elem.CreationEntries);
          me.disconnect(); // stop observing
          return;
        }
      });

      observer.observe(document, {
        childList: true,
        subtree: true
      });
    }
    );
  }
}
