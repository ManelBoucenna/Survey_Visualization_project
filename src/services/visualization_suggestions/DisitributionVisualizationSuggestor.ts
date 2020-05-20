import { VisualizationSuggestor } from './VisualizationSuggestor';
import { Visualization, Category } from '../../helpers/enums';
import { allData } from './../../assets/data/allData';

import { SuggestionEntry } from 'src/helpers/types';

// The workflow is as follow:
// 1- Check that the user has chosen only one questions: dataValidation()
// 2- Check the category of the question
// 3- Sugget Visualization
export class DistributionVisualizationSuggestor extends VisualizationSuggestor {
    public Suggest(): Visualization {
        const selectedQuestion = this.Entry.Questions[0];
        const Questionnaire: any = allData;
        const category = Questionnaire.filter(q => q.question === selectedQuestion).pop().category;
        switch (category) {
            case Category.MultipleChoices: {
                return Visualization.DetailledBarChart;
            }
            case Category.Country: {
                return Visualization.DetailledBarChart;
            }
            case Category.RatingScale: {
                return Visualization.BarBoxChart;
            }
            case Category.Numerical: {
                return Visualization.DetailledBarChart;
            }
            default: {
                alert('There is an error in question category: ' + category);
                break;
            }
        }
    }
}
