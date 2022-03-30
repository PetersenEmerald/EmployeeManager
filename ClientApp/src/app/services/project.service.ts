import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectModel } from '../models/project.model';
import { ProjectHttpService } from './project-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects$: BehaviorSubject<ProjectModel[]> = new BehaviorSubject([]);

  constructor(private projectHttpService: ProjectHttpService) { }

  getProjects(): void {
    this.projectHttpService.getProjects().subscribe(result => {
      this.projects$.next(result);
      console.log({ result });
    }, error => console.error(error));
  }

  //newEmployee(employee: EmployeeModel): void {
  //  this.employeeHttpService.newEmployee(employee).subscribe(result => {
  //    this.employees$.next(result);
  //  }, error => console.error(error));
  //}

  //editEmployee(employee: EmployeeModel): void {
  //  this.employeeHttpService.editEmployee(employee).subscribe(result => {
  //    this.employees$.next(result);
  //  }, error => console.error(error));
  //}

  //deleteEmployee(employeeID: number): void {
  //  this.employeeHttpService.deleteEmployee(employeeID).subscribe(result => {
  //    this.employees$.next(result);
  //  }, error => console.error(error));
  //}
}
