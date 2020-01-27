import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
//Services
import { CardsCreationService } from 'src/services/cards-creation.service';

@Component({
  selector: 'app-dragndrop-panel',
  templateUrl: './dragndrop-panel.component.html',
  styleUrls: ['./dragndrop-panel.component.css']
})

export class DragndropPanelComponent implements OnInit {

  // data: CardEntry[] = null;
  @ViewChild('cardContainer', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;

  constructor(private cardCreationService: CardsCreationService) { }

  ngOnInit() {
    this.cardCreationService.setRootViewContainerRef(this.viewContainerRef);
  }

}
