import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnDescription } from '../models/column.model';
import { EmployeeModel } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { ProjectService } from '../services/project.service';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  columns: ColumnDescription[] = [
    { name: 'projectID', displayName: 'ID', columnType: 'id' },
    { name: 'projectName', displayName: 'Project Name', columnType: 'column' },
    { name: 'projectDate', displayName: 'Project Date', columnType: 'column' },
    { name: 'contactEmployeeID', displayName: 'Employee Contact', columnType: 'column' },
  ];
  employees: EmployeeModel[];
  projectColumns: string[] = ['projectName', 'projectDate', 'contactEmployeeID'];
  selectedRowIndex = -1;

  constructor(public dialog: MatDialog, public employeeService: EmployeeService, public projectService: ProjectService) { }

  ngOnInit(): void {
    this.initializeProjectTable();
  }

  initializeProjectTable(): void {
    this.projectService.getProjects();
    this.employeeService.getEmployees();
    this.employeeService.employees$.subscribe((employees) => {
      this.employees = employees;
    })
  }

  getEmployeeName(contactEmployeeID: number): string {
    const employeeIndex = this.employees.findIndex((employee) => employee.employeeID === contactEmployeeID);
    return employeeIndex != -1 ?
      this.employees[employeeIndex].firstName + ' ' + this.employees[employeeIndex].lastName : null
  }

  openProjectDialog(project: any): void {
    const employeeIndex = this.employees.findIndex((employee) => employee.employeeID === project.contactEmployeeID);
    const employee = employeeIndex != -1 ? this.employees[employeeIndex] : null;

    this.dialog.open(ProjectDialogComponent, {
      width: '500px',
      data: { project: project, employee: employee },
    });
  }
}
