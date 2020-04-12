import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Section } from '../models/section';

@Injectable({
  providedIn: 'root'
})
export class EditSectionService {

  private editSection$: BehaviorSubject<Section> = new BehaviorSubject<Section>(null);

  editSection(): Observable<Section> {
    return this.editSection$.asObservable();
  }

  setEditSection(section: Section): void {
    this.editSection$.next(section);
  }

  editSectionValue(): Section {
    return this.editSection$.getValue();
  }
}
