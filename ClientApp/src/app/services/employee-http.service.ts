import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.baseUrl + 'employee');
  }

  newEmployee(employee: EmployeeModel): Observable<EmployeeModel[]> {
    return this.http.post<EmployeeModel[]>(this.baseUrl + 'employee/newEmployee', employee);
  }

  saveEmployee(employee: EmployeeModel): Observable<EmployeeModel[]> {
    return this.http.post<EmployeeModel[]>(this.baseUrl + 'employee/saveEmployee', employee);
  }

  deleteEmployee(employeeID: number): Observable<EmployeeModel[]> {
    return this.http.delete<EmployeeModel[]>(this.baseUrl + 'employee/' + employeeID);
  }

  getTabs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'view/getTabs');
  }
}
