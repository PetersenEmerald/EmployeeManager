export class Field {
  class?: string;
  disabled?: boolean = false;
  fieldType?: string;
  label: string;
  name?: string;
  parentClass?: string;
  placeHolder?: string;
  required?: boolean = false;
  priority?: number;
  type: string;
  value: string;

  // constructor(data?: Partial<Field>) {
  //   this.class = data ?.class;
  //   this.fieldType = data ?.fieldType;
  //   this.label = data ?.label;
  //   this.name = data ?.name;
  //   this.parentClass = data ?.parentClass;
  //   this.placeHolder = data ?.placeHolder;
  //   this.required = data ?.required;
  //   this.priority = data ?.priority;
  //   this.type = data ?.type;
  // }
}
