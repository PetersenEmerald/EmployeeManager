export class FieldModel {
  fieldData?: FieldDataModel[];
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean = false;
  priority?: number;
  type?: string;
  validationRules?: string[];
  validatorPattern?: string;
  value: any;
}

export class FieldDataModel {
  displayName: string;
  value: any;
}
