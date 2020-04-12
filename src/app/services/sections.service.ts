import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Section } from '../models/section';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  private sections$: BehaviorSubject<Section[]> = new BehaviorSubject<Section[]>([]);
  private activeSection$: BehaviorSubject<Section> = new BehaviorSubject<Section>(null);

  sections(): Observable<Section[]> {
    return this.sections$.asObservable();
  }

  setSections(sections: Section[]): void {
    this.sections$.next(sections);
  }

  sectionValue(): Section[] {
    return this.sections$.getValue();
  }

  updatetActiveSection(activeSection: Section): void {
    const sections: Section[] = this.sectionValue();
    this.activaSection(activeSection, sections);
    this.setActiveSection(activeSection);
    this.setSections(sections);
  }

  activaSection(activeSection: Section, sections: Section[]): void {
    sections.map(section => {
      section.active = section.id === activeSection?.id;
      if (section.sections.length > 0) {
        this.activaSection(activeSection, section.sections);
      }
    });
  }

  setActiveSection(section: Section): void {
    this.activeSection$.next(section);
  }

  activeSection(): Observable<Section> {
    return this.activeSection$.asObservable();
  }

  activeSectionValue(): Section {
    return this.activeSection$.getValue();
  }

  getSectionParent(section: Section, sections: Section[] = this.sectionValue()): Section | undefined {
    return this.getParent(sections, section);
  }

  getParent(sections: Section[], findSection: Section, parentSection?: Section): Section | undefined {
    for (const section of sections) {
      if (section.id === findSection.id) {
        return parentSection;
      }
      if (section.sections.length > 0) {
        return this.getParent(section.sections, findSection, section);
      }
    }
  }
}
