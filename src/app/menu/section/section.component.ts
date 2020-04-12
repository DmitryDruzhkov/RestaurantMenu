import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Section, SectionColors } from 'src/app/models/section';
import {
  ContextAction,
  DefaultActions,
  SectionActions,
  ContextActionAddPosition,
  ContextActionEdit,
  ContextActionDelete,
  ContextActionAddSection
} from 'src/app/models/context-menu';
import { Router } from '@angular/router';
import { EditSectionService } from 'src/app/services/edit-section.service';
import { StateService, State } from 'src/app/services/state.service';
import { EditPositionService } from 'src/app/services/edit-position.service';
import { SectionsService } from 'src/app/services/sections.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  @Input() section: Section;
  @Output() delete: EventEmitter<null> = new EventEmitter();

  activeSection: Observable<Section>;
  sectionActions: ContextAction[] = [
    ...SectionActions,
    ...DefaultActions
  ];

  constructor(
    private router: Router,
    private editSectionService: EditSectionService,
    private editPositionService: EditPositionService,
    private stateService: StateService,
    private sectionsService: SectionsService
  ) {
    this.activeSection = this.sectionsService.activeSection();
  }

  handleAction(action: ContextAction): void {
    switch (action.title) {
      case ContextActionAddSection.title:
        this.stateService.setState(State.ADD);
        this.editSectionService.setEditSection(this.section);
        this.router.navigate(['section']);
        break;
      case ContextActionAddPosition.title:
        this.stateService.setState(State.ADD);
        this.editSectionService.setEditSection(this.section);
        this.router.navigate(['position']);
        break;
      case ContextActionEdit.title:
        this.stateService.setState(State.EDIT);
        this.editSectionService.setEditSection(this.section);
        this.router.navigate(['section']);
        break;
      case ContextActionDelete.title:
        this.delete.next();
        break;
    }
  }

  handleActionPosition(action: ContextAction, index: number): void {
    switch (action.title) {
      case ContextActionEdit.title:
        this.stateService.setState(State.EDIT);
        this.editSectionService.setEditSection(this.section);
        this.editPositionService.setEditPosition(this.section.items[index]);
        this.router.navigate(['position']);
        break;
      case ContextActionDelete.title:
        this.deletePosition(index);
        break;
    }
  }

  deleteSection(index: number): void {
    this.section.sections.splice(index, 1);
  }

  deletePosition(index: number): void {
    this.section.items.splice(index, 1);
  }

  getBorderColor(): string | undefined {
     const color = SectionColors.get(this.section.color);
     return color;
  }

  titleClick(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
  }

  selectSection(): void {
    let activeSection: Section;

    if (this.sectionsService.activeSectionValue()?.id !== this.section.id) {
      activeSection = this.section;
    }

    this.editSectionService.setEditSection(activeSection);
    this.sectionsService.updatetActiveSection(activeSection);
  }
}
