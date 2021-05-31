export class Menu {
  id?: number;
  nmRotulo?: string;
  dsCaminho ?: string;
  menuFilho?: Menu[];
}

export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}
