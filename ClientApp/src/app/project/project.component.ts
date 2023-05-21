import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnDescription } from '../models/column.model';
import { EmployeeModel } from '../models/employee.model';
import { ProjectModel } from '../models/project.model';
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
    { name: 'isActive', displayName: 'Active', columnType: 'activeIcon' },
    { name: 'projectName', displayName: 'Project Name', columnType: 'column' },
    { name: 'projectDate', displayName: 'Project Date', columnType: 'column' },
    { name: 'employeeDisplayName', displayName: 'Employee Contact', columnType: 'column' },
  ];
  employees: EmployeeModel[];
  projectColumns: string[] = ['projectName', 'projectDate', 'contactEmployeeID'];
  projects: ProjectModel[];
  selectedRowIndex = -1;

  constructor(private dialog: MatDialog, 
    private employeeService: EmployeeService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.initializeProjectTable();
  }

  initializeProjectTable(): void {
    this.employeeService.getEmployees();
    this.employeeService.employees$.subscribe((employees) => {
      this.employees = employees;

      this.projectService.getProjects();
      this.projectService.projects$.subscribe((projects) => {
        this.projects = projects;
        projects.forEach((project, index) => {
          this.projects[index].employeeDisplayName = this.getEmployeeName(project.contactEmployeeID);
        })
      })
    })
  }

  getEmployeeName(contactEmployeeID: number): string {
    const employeeIndex = this.employees.findIndex((employee) => employee.employeeID === contactEmployeeID);
    return employeeIndex != -1 ?
      this.employees[employeeIndex].firstName + ' ' + this.employees[employeeIndex].lastName : null
  }

  openProjectDialog(project: any): void {
    this.dialog.open(ProjectDialogComponent, {
      width: '500px',
      data: { project: project },
    });
  }
}
