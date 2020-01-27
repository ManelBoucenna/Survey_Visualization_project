import { CreationEntry } from '../../helpers/types';
import { IDrawer } from '../../interfaces/IDrawer';

export abstract class VisualizationDrawer implements IDrawer {
    protected Entries: CreationEntry;
    public abstract Draw(): boolean;

    constructor(creationEntries: CreationEntry) {
        this.Entries = creationEntries;
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
