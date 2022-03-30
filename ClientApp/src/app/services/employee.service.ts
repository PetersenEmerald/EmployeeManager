import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import { EmployeeHttpService } from './employee-http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: BehaviorSubject<EmployeeModel[]> = new BehaviorSubject([]);

  constructor(private employeeHttpService: EmployeeHttpService) { }

  getEmployees(): void {
    this.employeeHttpService.getEmployees().subscribe(result => {
      console.log({ result });
      this.employees$.next(result);
    }, error => console.error(error));
  }
}
