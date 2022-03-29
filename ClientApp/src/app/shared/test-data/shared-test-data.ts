// import { TableColumnModel, TableCellModel, PeriodicElement, 
import { PropertiesModel, PropertyTypesModel, TableBuilderModel, PropertiesTasksModel } from "../models/shared.model";

// export const _testData: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

// export const _columnsTestData: TableColumnModel[] = [
//   {
//     nameID: "position",
//     displayName: "Demo Position"
//   },
//   {
//     nameID: "name",
//     displayName: "Demo Name"
//   },
//   {
//     nameID: "weight",
//     displayName: "Demo Weight"
//   },
//   {
//     nameID: "symbol",
//     displayName: "Demo Symbol"
//   }
// ];

// export const _weekDataHeaders: TableColumnModel[] = [
//     {
//       nameID: 'startingTimePeriod',
//       displayName: 'Time'
//     },
//     {
//       nameID: 'sunday',
//       displayName: 'Sunday'
//     },
//     {
//       nameID: 'monday',
//       displayName: 'Monday'
//     },
//     {
//       nameID: 'tuesday',
//       displayName: 'Tuesday'
//     },
//     {
//       nameID: 'wednesday',
//       displayName: 'Wednesday'
//     },
//     {
//       nameID: 'thursday',
//       displayName: 'Thursday'
//     },
//     {
//       nameID: 'friday',
//       displayName: 'Friday'
//     },
//     {
//       nameID: 'saturday',
//       displayName: 'Saturday'
//     }    
//   ];

//   export const _timeBlocks: TableCellModel[] = [
//     {
//       cellDisplayName: ' ',
//       cellColor: '#FFFFFF'
//     },
//     {
//       cellDisplayName: 'Career',
//       cellColor: '#0078FF'
//     },
//     {
//       cellDisplayName: 'Breathe',
//       cellColor: '#E100A9'
//     },
//     {
//       cellDisplayName: 'Focus',
//       cellColor: '#008F00'
//     },
//     {
//       cellDisplayName: 'Sleep',
//       cellColor: '#E92B00'
//     }
//   ];


export const _schedulerData: PropertiesModel[] = [
  {
    propertyID: 1,
    propertyTypeID: 1,
    propertyDisplayName: 'Sunday',
    propertyName: 'sunday',
    propertyDescription: '',
    propertyValue: '',
  },
  {
    propertyID: 2,
    propertyTypeID: 1,
    propertyDisplayName: 'Monday',
    propertyName: 'monday',
    propertyDescription: '',
    propertyValue: '',
  },
  {
    propertyID: 3,
    propertyTypeID: 2,
    propertyDisplayName: '00:00',
    propertyName: '',
    propertyDescription: '',
    propertyValue: '0',
  },
  {
    propertyID: 4,
    propertyTypeID: 2,
    propertyDisplayName: '00:45',
    propertyName: '',
    propertyDescription: '',
    propertyValue: '.75',
  },
  {
    propertyID: 5,
    propertyTypeID: 3,
    propertyDisplayName: 'Breathe',
    propertyName: '',
    propertyDescription: '',
    propertyValue: '#E100A9',
  },
  {
    propertyID: 6,
    propertyTypeID: 1,
    propertyDisplayName: 'Sleep',
    propertyName: '',
    propertyDescription: '',
    propertyValue: '#E92B00',
  }
];


export const _schedulerPropertyTypesData: PropertyTypesModel[] = [
  {
    propertyTypeID: 1,
    propertyTypeDescription: '',
    propertyTypeDisplayName: 'Week Day',
    propertyTypeName: 'weekDay',
  },
  {
    propertyTypeID: 2,
    propertyTypeDescription: '',
    propertyTypeDisplayName: 'Time Period',
    propertyTypeName: 'weekDay',
  },
  {
    propertyTypeID: 3,
    propertyTypeDescription: '',
    propertyTypeDisplayName: 'Activity Block',
    propertyTypeName: 'activityBlock',
  },
];

export const _tableBuilderData: TableBuilderModel =
  {
    tableBuilderID: 1,
    tableColumnID: 1,
    tableRowID: 2,
  };

export const _propertiesTasksData: PropertiesTasksModel[] = [
  { 
    propertyTaskID: 1,
    propertyID: 5,
    tableColumnPropertyID: 1,
    tableRowPropertyID: 3,
    taskIDs: ''
  },
  { 
    propertyTaskID: 2,
    propertyID: 6,
    tableColumnPropertyID: 2,
    tableRowPropertyID: 4,
    taskIDs: ''
  },
];
//   export interface PropertyTypesModel {
//   propertyTypeID: number;
//   propertyTypeDescription: string;
//   propertyTypeDisplayName: string;
//   propertyTypeName: string;
// }

// export interface PropertiesModel {
//   propertyID: number;
//   propertyTypeID: number;
//   propertyDisplayName: string;
//   propertyName: string;
//   propertyDescription: string;
//   propertyValue: string;
// }

// export interface TableBuilderModel {
//     tableBuilderID: number;
//     tableColumn: number;
//     tableDisplay: number;
//     tableRow: number;
// }

// export interface PropertiesTasksModel {
//   propertyTaskID: number;
//   tableBuilder: number;
//   taskID: number;
// }