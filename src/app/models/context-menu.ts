export interface ContextAction {
  icon: string;
  title: string;
  disabled: boolean;
}

export const ContextActionAddPosition: ContextAction = {
  icon: 'add',
  title: 'Добавить позицию',
  disabled: false
};

export const ContextActionAddSection: ContextAction = {
  icon: 'add',
  title: 'Добавить раздел меню',
  disabled: false
};

export const ContextActionEdit: ContextAction = {
  icon: 'edit',
  title: 'Редактировать',
  disabled: false
};

export const ContextActionDelete: ContextAction = {
  icon: 'delete',
  title: 'Удалить',
  disabled: false
};

export const DefaultActions: ContextAction[] = [
  ContextActionEdit,
  ContextActionDelete
];

export const SectionActions: ContextAction[] = [
  ContextActionAddPosition,
  ContextActionAddSection
];

export const PositionActions: ContextAction[] = [
  ContextActionAddPosition
];
