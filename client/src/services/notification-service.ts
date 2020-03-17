import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable()

export class NotficationService {

    private subject$: Subject<any>;
    public listener: Observable<any>;

    constructor() {
        this.subject$ = new Subject();
        this.listener = this.subject$.asObservable();
    }

    emit(data: any) {
        this.subject$.next(data);
    }
}