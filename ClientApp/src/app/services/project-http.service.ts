import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import { ProjectModel } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectHttpService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.baseUrl + 'project');
  }

  //newEmployee(employee: EmployeeModel): Observable<EmployeeModel[]> {
  //  return this.http.post<EmployeeModel[]>(this.baseUrl + 'employee/createEmployee', employee);
  //}

  //editEmployee(employee: EmployeeModel): Observable<EmployeeModel[]> {
  //  return this.http.post<EmployeeModel[]>(this.baseUrl + 'employee/updateEmployee', employee);
  //}

  //deleteEmployee(employeeID: number): Observable<EmployeeModel[]> {
  //  return this.http.delete<EmployeeModel[]>(this.baseUrl + 'employee/' + employeeID);
  //}
}
