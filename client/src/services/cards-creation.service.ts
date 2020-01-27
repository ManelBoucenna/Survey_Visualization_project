import { Injectable, ComponentFactoryResolver, } from '@angular/core';
// Components
import { CardVizComponent } from 'src/app/detailview/card-viz/card-viz.component';
// Data files
import { CardEntry} from 'src/helpers/types';
@Injectable({
  providedIn: 'root'
})
export class CardsCreationService {

  private rootViewContainer: any;

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  public addDynamicCard(cardEntry: CardEntry): Promise<any> {
    return new Promise(
      (resolve, reject) => {
        const factory = this.factoryResolver.resolveComponentFactory(CardVizComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);

        (component.instance as any).id = cardEntry.Id;
        (component.instance as any).task = cardEntry.Task;
        (component.instance as any).visualization = cardEntry.Visualization;
        (component.instance as any).variable = cardEntry.CreationEntries.Questions[0].variable;
        (component.instance as any).created = true;
        (component.instance as any).creationEntries = cardEntry.CreationEntries;


        this.rootViewContainer.insert(component.hostView);
        console.log('Node created: ', component.instance);

        resolve(component);
      }
    );
  }

}
