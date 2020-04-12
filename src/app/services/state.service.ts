import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum State {
  ADD = 'ADD',
  EDIT = 'EDIT'
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state$: BehaviorSubject<State> = new BehaviorSubject(State.ADD);

  state(): Observable<State> {
    return this.state$.asObservable();
  }

  setState(state: State): void {
    this.state$.next(state);
  }

  stateValue(): State {
    return this.state$.getValue();
  }
}
