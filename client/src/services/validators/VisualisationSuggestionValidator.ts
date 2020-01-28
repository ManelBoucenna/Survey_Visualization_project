import { ValidationResult } from './../../helpers/types';
import { ValidationStatus, Task } from './../../helpers/enums';
import { IValidator } from './../../interfaces/IValidator';

// Data
import { allData } from './../../assets/data/allData';

export class VisualisationSuggestionValidator implements IValidator {

    constructor(private questions: string[], private task: Task) { }

    Validate(): ValidationResult[] {
        let validationResults: ValidationResult[] = [];

        validationResults = validationResults.concat(this.ValidateQuestions()).concat(this.ValidateByTasks());

        return validationResults;
    }

    private ValidateQuestions(): ValidationResult[] { //Validate entered data
        const validationResults = [];
        const Questionnaire: any = allData;
        this.questions.forEach(question => {
            if (Questionnaire.some(item => item.variable === question)) {
                validationResults.push(new ValidationResult(ValidationStatus.Passed));
            } else {
                validationResults.push(new ValidationResult(ValidationStatus.Failed, question + ' does not exist.'));
            }
        });
        return validationResults;
    }

    private ValidateByTasks(): ValidationResult[] {
        const validationResults = [];
        switch (this.task) {
            case Task.Distribution:
                return this.ValidateDistribution();
                break;
            case Task.Relationship:
                return this.ValidateRelationship();
                break;
            case Task.TimeEvolution:
                return this.ValidateTimeEvolution();
                break;
            default:
                break;
        }
        return validationResults;
    }

    private ValidateDistribution(): ValidationResult[] {
        const validationResults: ValidationResult[] = [];
        if (this.questions.length === 1) {
            validationResults.push(new ValidationResult(ValidationStatus.Passed));
        } else if (this.questions.length === 0) {
            validationResults.push(new ValidationResult(ValidationStatus.Failed, 'Select at least one question.'));
        } else {
            validationResults.push(new ValidationResult(ValidationStatus.Failed, 'Select only one question at the time to visualize.'));
        }
        return validationResults;
    }

    private ValidateRelationship(): ValidationResult[] {
        const validationResults: ValidationResult[] = [];
        if (this.questions.length > 1) {
            validationResults.push(new ValidationResult(ValidationStatus.Passed));
        } else {
            validationResults.push(new ValidationResult(ValidationStatus.Failed, 'Select at least two question.'));
        }
        return validationResults;
    }

    private ValidateTimeEvolution(): ValidationResult[] {
        const validationResults: ValidationResult[] = [];
        if (this.questions.length === 1) {
            validationResults.push(new ValidationResult(ValidationStatus.Passed));
        } else if (this.questions.length === 0) {
            validationResults.push(new ValidationResult(ValidationStatus.Failed, 'Select at least one question.'));
        } else {
            validationResults.push(new ValidationResult(ValidationStatus.Failed, 'Select only one question at the time to visualize.'));
        }
        return validationResults;

    }

}
