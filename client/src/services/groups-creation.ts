import { NotficationService } from 'src/services/notification-service';


export class GroupCreationService {
  public static groupedViz = {};

  constructor(private notficationService: NotficationService) {
    this.notficationService.listener.subscribe(
    data => { console.log(data); }
  ); }

  public static RedrawAll = function(groupId: any) {
    console.log("Redraw yaw");
    console.log(this.groupedViz);
    console.log(groupId);

    if (this.groupedViz[groupId] !== undefined) {
      this.groupedViz[groupId].forEach(elem => elem.redraw());
    }
  }
}

