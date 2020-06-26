import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkDragDrop, CdkDragStart } from '@angular/cdk/drag-drop';

// Services
import { CardsCreationService } from 'src/services/cards-creation.service';
import { CardEntry } from 'src/helpers/types';
import { Task, Visualization, Information } from 'src/helpers/enums';

@Component({
  selector: 'app-dragndrop-panel',
  templateUrl: './dragndrop-panel.component.html',
  styleUrls: ['./dragndrop-panel.component.css']
})

export class DragndropPanelComponent implements OnInit {

  tasks: any = Task;
  @ViewChild('cardContainer', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  constructor(public cardsCreationService: CardsCreationService) { }

  ngOnInit() { }

  DeleteCard(id) {
    return this.cardsCreationService.removeCard(id);
  }

  drop(event: CdkDragDrop<CardEntry[]>) {
    this.cardsCreationService.moveCard(event);
  }

  drag(event: CdkDragStart<any>) {
    //this.cardsCreationService.createGroup();
  }

  AddEmptyCard() {
    this.cardsCreationService.createGroup();
  }

  ReadChart(viz: Visualization, block: any) {
    const decoder = block.CreationEntries.Questions[0].description;
    if (decoder){
      alert(Information[viz]+ decoder)
    }
    else{
      alert(Information[viz])
    }    
  }
}


