import { VisualizationSuggestor } from './VisualizationSuggestor';
import { SuggestionEntry } from '../../helpers/types';
import { Visualization, Task } from '../../helpers/enums';
import { DistributionVisualizationSuggestor } from './DisitributionVisualizationSuggestor';
import { RelationshipVisualizationSuggestor } from './RelationshipVisualizationSuggestor';
import { TimeVisualizationSuggestor } from './TimeVisualizationSuggestor';

export class VisualizationSuggestorFactory {
    public static Create(suggestionEntry: SuggestionEntry): VisualizationSuggestor {
        switch (suggestionEntry.Task) {
            case Task.Distribution: return new DistributionVisualizationSuggestor(suggestionEntry);
            case Task.Relationship: return new RelationshipVisualizationSuggestor(suggestionEntry);
            case Task.TimeEvolution: return new TimeVisualizationSuggestor(suggestionEntry);
            default: console.log('none'); return null;
        }
    }
}
