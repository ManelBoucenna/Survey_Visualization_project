import { ValidationResult } from 'src/helpers/types';

export interface IValidator {
    Validate(): ValidationResult[];
}
