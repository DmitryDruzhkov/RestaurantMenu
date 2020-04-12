import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ContextAction } from 'src/app/models/context-menu';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {
  @Input() actions: ContextAction[] = [];
  @Output() action: EventEmitter<ContextAction> = new EventEmitter();

  onClick(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
  }

  onAction(action: ContextAction): void {
    this.action.next(action);
  }
}
