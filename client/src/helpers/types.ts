import { Task, Visualization, ValidationStatus } from './enums';
import { withLatestFrom } from 'rxjs/operators';

export class Question {
    id: number;
    variable: string;
    question: string;
    category: string;
    Options: any;
    answers: string[];
}

export class CreationEntry {
    public id: string;
    public Questions: Question[];
    public ndx: any;
    public Overview: boolean;
    public width: number;
    public height: number;
    public margins: any;
    constructor(
        id: string,
        questions: Question[],
        overview: boolean = true,
        ndx: any,
        width: number = 80,
        height: number = 55,
        margins: any = { left: 5, right: 5, top: 0, bottom: 35 }) {
        this.id = id;
        this.Questions = questions;
        this.Overview = overview;
        this.ndx = ndx;
        this.width = width;
        this.height = height;
        this.margins = margins;
    }

    public IsOverviewOption(): boolean {
        if (this.Overview === true) { return true; }
        return false;
    }
}

export class CardEntry {
    public Id: string;
    public CreationEntries: CreationEntry;
    public Visualization: Visualization;
    public Task: Task;
}

export class SuggestionEntry {
    public Questions: string[];
    public Task: Task;
    constructor(questions: string[], task: Task) {
        this.Questions = questions;
        this.Task = task;
    }

    public IsSingleQuestion(): boolean {
        if (this.Questions.length === 1) { return true; } else { return false; }
    }
}

export class ValidationResult {
    public Result: ValidationStatus;
    public Message: string;

    constructor(result: ValidationStatus, message: string = null) {
        this.Result = result;
        this.Message = message;
    }
}
