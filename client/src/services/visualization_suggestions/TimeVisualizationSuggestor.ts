import { Visualization, Category } from '../../helpers/enums';
import { VisualizationSuggestor } from './VisualizationSuggestor';
import { SuggestionEntry } from '../../helpers/types';
import { questionnaire } from '../../assets/data/questionnaire';

// The workflow is as follow:
// 1- Check that the user has chosen only one questions: dataValidation()
// 2- Check the category of the question
// 3- Sugget Visualization

export class TimeVisualizationSuggestor extends VisualizationSuggestor {
    public Suggest(): Visualization {
        // if (this.dataValidation(this.Entry)) {
        const selectedQuestion = this.Entry.Questions[0];
        const category = questionnaire.filter(q => q.variable === selectedQuestion).pop().category;
        switch (category) {
            case Category.MultipleChoices: {
                return Visualization.StackedChart;
            }
            case Category.RatingScale: {
                return Visualization.BoxChart;
            }
            case Category.Numerical: {
                return Visualization.BoxChart;
            }
            default: {
                alert('There is an error in question category: ' + category);
                break;
            }
        }
        // } else {
        //     return null;
        // }
    }
    // public dataValidation(suggestionEntry: SuggestionEntry): boolean {
    //     if (suggestionEntry.Questions.length === 1) {
    //         return true;
    //     } else if (suggestionEntry.Questions.length === 0) {
    //         alert('Select at least one question');
    //         return false;
    //     } else {
    //         alert('Select only one question at the time to visualize.');
    //         return false;
    //     }
    // }
}
