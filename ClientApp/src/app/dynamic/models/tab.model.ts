import { FieldModel } from "./field.model";

export class TabModel {
  tabID: number;
  displayName: string;
  name: string;
  fields: FieldModel[];
  data: any;
}

export class DataModel {
  tabID: number;
  values: string;
}

export class TabDataModel {
  values: any;
  view: TabModel;
}
