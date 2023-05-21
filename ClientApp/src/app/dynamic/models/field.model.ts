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
  validationRules?: string[];
  validatorPattern?: string;
  value: any;
}
