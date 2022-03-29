// export interface TableColumnModel {
//   nameID: string;
//   displayName: string;
// }

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// export interface TableCellModel {
//   cellDisplayName: string;
//   cellColor: string;
// }

// export interface ScheduleDataModel {
//   startingTimePeriod: string;
//   sunday: TableCellModel;
//   monday: TableCellModel;
//   tuesday: TableCellModel;
//   wednesday: TableCellModel;
//   thursday: TableCellModel;
//   friday: TableCellModel;
//   saturday: TableCellModel;
// }

export interface PropertyTypesModel {
  propertyTypeID: number;
  propertyTypeDescription: string;
  propertyTypeDisplayName: string;
  propertyTypeName: string;
}

export interface PropertiesModel {
  propertyID: number;
  propertyTypeID: number;
  propertyDisplayName: string;
  propertyName: string;
  propertyDescription: string;
  propertyValue: string;
}

export interface TableBuilderModel {
  tableBuilderID: number;
  tableColumnID: number;
  tableRowID: number;
}

export interface PropertiesTasksModel {
  propertyTaskID: number;
  propertyID: number;
  tableColumnPropertyID: number;
  tableRowPropertyID: number;
  taskIDs: string;
}