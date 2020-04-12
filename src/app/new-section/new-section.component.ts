import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Colors, SectionColors, Section } from '../models/section';
import { SectionsService } from '../services/sections.service';
import { Observable } from 'rxjs';
import { map, startWith } from "rxjs/operators";
import { Router } from '@angular/router';
import { Helper } from '../helper';
import { State, StateService } from '../services/state.service';
import { EditSectionService } from '../services/edit-section.service';

enum Title {
  ADD = 'Добавить позицию',
  EDIT = 'Редактировать позицию',
}

@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewSectionComponent implements OnInit {

  filteredSections: Observable<Section[]>;
  colors = SectionColors;
  sectionForm: FormGroup;
  sections: Section[] = [];
  parentSection: Section;
  section: Section;
  state: State;
  title = Title.ADD;

  constructor(
    private formBuilder: FormBuilder,
    private sectionsService: SectionsService,
    private router: Router,
    private stateService: StateService,
    private editSectionService: EditSectionService
  ) {
    this.state = this.stateService.stateValue();
    if (this.state === State.ADD) {
      this.parentSection = this.editSectionService.editSectionValue();
    } else {
      this.title = Title.EDIT;
      this.section = this.editSectionService.editSectionValue();
      this.parentSection = this.sectionsService.getSectionParent(this.section);
    }

    this.sectionForm = this.getSectionForm(this.section);
  }

  ngOnInit(): void {
    this.sections = this.sectionsService.sectionValue();
    this.filteredSections = this.sectionForm.controls.sectionControl.valueChanges
    .pipe(
      startWith(''),
      map((value: Section) => typeof value === 'string' ? value : value.name),
      map(state => state ? this.filterStates(state) : this.sections.slice())
    );
  }

  private filterStates(value: string): Section[] {
    const filterValue = value.toLowerCase();
    return this.sections.filter(section => section.name.toLowerCase().indexOf(filterValue) === 0);
  }

  getSectionForm(editSection: Section | undefined): FormGroup {
    const form = this.getNewSectionForm();

    if (this.parentSection) {
      form.controls.sectionControl.setValue(this.parentSection);
    }

    if (editSection) {
      form.patchValue(editSection);
    }

    return form;
  }

  getNewSectionForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      sectionControl: [''],
      color: ['', Validators.required]
    });
  }

  getColors(): string[] {
    return [ ...this.colors.keys() ];
  }

  getColor(color: Colors): string | undefined {
    return this.colors.get(color);
  }

  selectColor(color: Colors): void {
    this.sectionForm.controls.color.setValue(color);
  }

  displayFn(section: Section): string {
    return section?.name;
  }

  onSubmit(): void {
    let section: Section;
    const parentSection: Section = this.sectionForm.value.sectionControl;

    if (this.state === State.ADD) {
      section = this.getNewSection();
    } else {
      section = this.section;
    }

    section.name = this.sectionForm.value.name;
    section.color = this.sectionForm.value.color;

    if (this.state === State.ADD) {
      if (parentSection) {
        parentSection.sections.push(section);
      } else {
        this.sections.push(section);
      }
    }

    this.sectionsService.setSections([...this.sections]);
    this.editSectionService.setEditSection(null);
    this.router.navigate(['']);
  }

  getNewSection(): Section {
    return {
      id: Helper.GetUUID(),
      items: [],
      name: '',
      sections: [],
      color: Colors.Black
    };
  }
}
