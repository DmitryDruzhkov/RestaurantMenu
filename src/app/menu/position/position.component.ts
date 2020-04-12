import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Position } from 'src/app/models/position';
import { 
  ContextAction,
  DefaultActions,
  PositionActions,
  ContextActionEdit,
  ContextActionDelete
} from 'src/app/models/context-menu';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionComponent {
  @Input() position!: Position;
  @Output() action: EventEmitter<ContextAction> = new EventEmitter();

  positionActions: ContextAction[] = [
    ...DefaultActions
  ];

  handleAction(action: ContextAction): void {
    switch (action.title) {
      case ContextActionEdit.title:
        this.action.next(ContextActionEdit);
        break;
      case ContextActionDelete.title:
        this.action.next(ContextActionDelete);
        break;
    }
  }
}
