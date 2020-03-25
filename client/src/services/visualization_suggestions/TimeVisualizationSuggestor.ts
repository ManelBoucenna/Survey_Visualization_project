import { Visualization, Category } from '../../helpers/enums';
import { VisualizationSuggestor } from './VisualizationSuggestor';
import { allData } from './../../assets/data/allData';

// The workflow is as follow:
// 1- Check that the user has chosen only one questions: dataValidation()
// 2- Check the category of the question
// 3- Sugget Visualization

export class TimeVisualizationSuggestor extends VisualizationSuggestor {
    public Suggest(): Visualization {
        const selectedQuestion = this.Entry.Questions[0];
        const questionnaire: any = allData;
        const category = questionnaire.filter(q => q.question === selectedQuestion).pop().category;
        switch (category) {
            case Category.MultipleChoices: {
                return Visualization.StackedChart;
            }
            case Category.RatingScale: {
                return Visualization.ViolinBoxChart;
                //return Visualization.BoxChart;
            }
            case Category.Numerical: {
                return Visualization.ViolinBoxChart;
                // return Visualization.BoxChart;
            }
            default: {
                alert('There is an error in question category: ' + category);
                break;
            }
        }
    }

}
