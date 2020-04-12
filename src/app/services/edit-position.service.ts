import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Position } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EditPositionService {

  private editPosition$: BehaviorSubject<Position> = new BehaviorSubject<Position>(null);

  editPosition(): Observable<Position> {
    return this.editPosition$.asObservable();
  }

  setEditPosition(position: Position): void {
    this.editPosition$.next(position);
  }

  editPositionValue(): Position {
    return this.editPosition$.getValue();
  }
}
