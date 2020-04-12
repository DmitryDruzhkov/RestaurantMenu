import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Section } from '../models/section';
import { State, StateService } from '../services/state.service';
import { EditSectionService } from '../services/edit-section.service';
import { Position } from '../models/position';
import { EditPositionService } from '../services/edit-position.service';

enum Title {
  ADD = 'Добавить позицию',
  EDIT = 'Редактировать позицию',
}

@Component({
  selector: 'app-new-position',
  templateUrl: './new-position.component.html',
  styleUrls: ['./new-position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPositionComponent {

  positionForm: FormGroup;
  section: Section;
  position: Position;
  state: State;
  title = Title.ADD;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private editSectionService: EditSectionService,
    private editPositionService: EditPositionService,
    private stateService: StateService,
  ) {
    this.section = this.editSectionService.editSectionValue();
    if (!this.section) {
      this.router.navigate(['']);
    }
    this.state = this.stateService.stateValue();
    if (this.state === State.EDIT) {
      this.title = Title.EDIT;
      this.position = this.editPositionService.editPositionValue();
    }
    this.positionForm = this.getPositionForm(this.position);
  }

  getPositionForm(position: Position | null): FormGroup {
    const form = this.getNewPositionForm();

    if (position) {
      form.patchValue(position);
    }

    return form;
  }

  getNewPositionForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      sale: ['', Validators.required]
    });
  }

  onSubmit(): void {
    let position: Position;

    if (this.state === State.ADD) {
      position = this.getNewPosition();
    } else {
      position = this.position;
    }

    position.name = this.positionForm.value.name;
    position.sale = this.positionForm.value.sale;

    if (this.state === State.ADD) {
      this.section.items.push(position);
    }

    /* this.sectionsService.setSections([...this.sections]); */
    this.router.navigate(['']);
  }

  getNewPosition(): Position {
    return {
      name: '',
      sale: 0
    };
  }

}
