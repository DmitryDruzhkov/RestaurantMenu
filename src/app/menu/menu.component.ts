import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Section } from '../models/section';
import { Observable } from 'rxjs';
import { SectionsService } from '../services/sections.service';
import { Router } from '@angular/router';
import { StateService, State } from '../services/state.service';
import { EditSectionService } from '../services/edit-section.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {

  sections: Observable<Section[]>;
  activeSection: Observable<Section>;

  constructor(
    private router: Router,
    private sectionsService: SectionsService,
    private state: StateService,
    private editSectionService: EditSectionService
  ) {
    this.sections = this.sectionsService.sections();
    this.activeSection = this.sectionsService.activeSection();
  }

  deleteSection(i: number): void {
    const sections = this.sectionsService.sectionValue();
    sections.splice(i, 1);
    this.sectionsService.setSections(sections);
  }

  addSection(): void {
    this.editSectionService.setEditSection(null);
    this.routeTo('section');
  }

  addPosition(): void {
    this.routeTo('position');
  }

  routeTo(url: string): void {
    this.state.setState(State.ADD);
    this.router.navigate([url]);
  }
}
