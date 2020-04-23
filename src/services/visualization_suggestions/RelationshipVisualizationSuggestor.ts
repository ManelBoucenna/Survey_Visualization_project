import { Visualization, Category } from '../../helpers/enums';
import { VisualizationSuggestor } from './VisualizationSuggestor';
import { SuggestionEntry } from '../../helpers/types';
import { allData } from './../../assets/data/allData';

// The workflow is as follow:
// 1- Check that the user has chosen more than one question: dataValidation()
// 2- Check type of relationship: Binary or Multi
// 3- Check type of questions: Homogene or Heterogene
// 4- Check type of Homogene questions
// 5- Sugget Visualization

export class RelationshipVisualizationSuggestor extends VisualizationSuggestor {
    public Suggest(): Visualization {
            const dataType = this.homogeneousData(this.Entry);
            // Binary Relationship
            if (this.binaryRelationship(this.Entry)) {
                return this.BinarySuggestion(dataType);
            } else {
                return this.MultipleSuggestion(dataType);
            }
    }

    public binaryRelationship(suggestionEntry: SuggestionEntry): boolean {
        if (this.Entry.Questions.length === 2) {
            return true;
        } else {
            return false;
        }
    }

    public homogeneousData(suggestionEntry: SuggestionEntry): { Homogeneous: boolean, Type: string } {
        let homogeneous = true;
        const questions = this.Entry.Questions;
        let categoryOld = null;
        let categoryNew = null;
        let type = null;
        const questionnaire: any = allData;

        for (const element of questions) {
            if (categoryOld === null) {
                categoryOld = questionnaire.filter(q => q.question === element).pop().category;
            } else {
                categoryNew = questionnaire.filter(q => q.question === element).pop().category;
                type = categoryNew;
                if (categoryNew !== categoryOld) {
                    homogeneous = false;
                    type = null;
                    break;
                }
            }
        }
        console.log('Valeur homogenes:' + homogeneous + 'de Type ' + type);
        return { Homogeneous: homogeneous, Type: type };
    }

    public BinarySuggestion(dataType: any): Visualization {
        if (dataType.Homogeneous) {
            switch (dataType.Type) {
                case Category.MultipleChoices:
                    return Visualization.BalloonChart;
                case Category.RatingScale:
                    return Visualization.BubbleChart;
                case Category.Numerical:
                    return Visualization.BubbleChart;
                default:
                    alert('There is an error in question category: ' + dataType.Type);
                    break;
            } 
        } else {
            return Visualization.ViolinChart;
        }
    }

    public MultipleSuggestion(dataType: any): Visualization {
        if (dataType.Homogeneous) {
            switch (dataType.Type) {
                case Category.MultipleChoices:
                    return Visualization.SankeyChart;
                case Category.RatingScale:
                    return Visualization.ParallelChart;
                case Category.Numerical:
                    return Visualization.ParallelChart;
                default:
                    alert('There is an error in question category: ' + dataType.Type);
                    break;
            }
        } else {
            return Visualization.ParallelChart;
        }
    }
}
