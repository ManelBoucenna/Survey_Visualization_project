import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { MetaviewComponent } from './metaview/metaview.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { SuggestionPanelComponent } from './detailview/suggestion-panel/suggestion-panel.component';
import { DragndropPanelComponent } from './detailview/dragndrop-panel/dragndrop-panel.component';
import { CardVizComponent } from './detailview/card-viz/card-viz.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { NotficationService } from 'src/services/notification-service';
@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    MetaviewComponent,
    DetailviewComponent,
    SuggestionPanelComponent,
    DragndropPanelComponent,
    CardVizComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,

    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTooltipModule,

    ScrollingModule

  ],
  providers: [NotficationService],
  bootstrap: [AppComponent],
  entryComponents: [CardVizComponent]
})
export class AppModule { }
