import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detailview',
  template:
    `
  <app-suggestion-panel></app-suggestion-panel>
  <app-dragndrop-panel ></app-dragndrop-panel>
  `,
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
