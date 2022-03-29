import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { TableCellModel } from './models/shared.model';
// import { ScheduleDataModel } from '../shared/models/shared.model';

declare var require: any;
//var _initialWeekData: ScheduleDataModel[] = require('../schedule/primarySchedule.json');

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  // initialWeekData: ScheduleDataModel[] = require('../schedule/primarySchedule.json');
  // public selectedScheduleColor$: BehaviorSubject<TableCellModel> = new BehaviorSubject<TableCellModel>({
  //   cellDisplayName: ' ',
  //   cellColor: '#FFFFFF'
  // });
  // public weekData$: BehaviorSubject<ScheduleDataModel[]> = new BehaviorSubject<ScheduleDataModel[]>(_initialWeekData);

  constructor() { }

  // setSelectedScheduleColor(newColor: TableCellModel): void {
  //   this.selectedScheduleColor$.next(newColor);
  // }
}
