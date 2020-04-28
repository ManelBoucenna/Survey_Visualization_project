import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';

//Components
import { AppComponent, DialogOverviewExampleDialog } from './app.component';
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
import {MatRadioModule} from '@angular/material/radio'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatListModule} from '@angular/material/list'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { NotficationService } from 'src/services/notification-service';
import { DataProvider } from './../services/Data_provider.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog,
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
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,

    MatMenuModule,

    ScrollingModule

  ],
  providers: [
    NotficationService,
    DataProvider,
    { provide: APP_INITIALIZER, useFactory: DataProviderFactory, deps: [DataProvider], multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CardVizComponent, DialogOverviewExampleDialog]
})
export class AppModule { }

export function DataProviderFactory(provider: DataProvider) {
  return () => provider.load();
}
