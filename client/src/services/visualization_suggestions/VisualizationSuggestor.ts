import { SuggestionEntry } from '../../helpers/types';
import { Task, Visualization } from '../../helpers/enums';
import { ISuggest } from '../../interfaces/ISuggest';

export abstract class VisualizationSuggestor implements ISuggest {
    protected Entry: SuggestionEntry;
    public abstract Suggest(): Visualization;

    constructor(suggestionEntry: SuggestionEntry) {
        this.Entry = suggestionEntry;
    }
}
