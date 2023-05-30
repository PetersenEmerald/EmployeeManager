export class FieldModel {
  fieldID: number;
  tabID: number;
  name: string;
  tableColumn: boolean;
  type: string;

  columnType?: string;
  displayName?: string;
  fieldData?: FieldDataModel[];
  placeholder?: string;
  required?: boolean = false;
  priority?: number;
  validationRules?: string[];
  validatorPattern?: string;
  value: any;
}

export class FieldDataModel {
  displayName: string;
  value: any;
}
