import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataModel, TabModel } from '../dynamic/models/tab.model';
import { EmployeeModel } from '../models/employee.model';
import { EmployeeHttpService } from './employee-http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: BehaviorSubject<EmployeeModel[]> = new BehaviorSubject([]);
  viewData$: BehaviorSubject<TabModel[]> = new BehaviorSubject([]);

  constructor(private employeeHttpService: EmployeeHttpService) { }


  saveData(newData: TabModel): void {
    const saveData: DataModel = {
      tabID: newData.tabID,
      values: JSON.stringify(newData.data)
    }
    this.employeeHttpService.saveData(saveData).subscribe(result => {
      this.viewData$.next(result);
    }, error => console.error(error));
  }

  getViewData(): void {
    this.employeeHttpService.getViewData().subscribe((result) => {
      console.log({ result });
      this.viewData$.next(result);
    })
  }
}
