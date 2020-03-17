import { NotficationService } from './../notification-service';
import { CreationEntry } from '../../helpers/types';
import { IDrawer } from '../../interfaces/IDrawer';


export abstract class VisualizationDrawer implements IDrawer {
    protected Entries: CreationEntry;
    public abstract Draw(): any;
    protected notificationService_: NotficationService;

    constructor(
        creationEntries: CreationEntry,
        private notficationService: NotficationService) {
        this.Entries = creationEntries;
        this.notificationService_ = this.notficationService;
    }



    protected StaticCopyGroup(group) {
        const all = group.all().map(function (kv) { return { key: kv.key, value: kv.value }; });
        return {
            all() {
                return all;
            }
        };
    }
}
