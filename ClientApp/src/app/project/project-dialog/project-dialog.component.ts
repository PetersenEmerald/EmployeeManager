import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FieldModel, FieldDataModel } from '../../dynamic/models/field.model';
import { EmployeeModel } from '../../models/employee.model';
import { ProjectModel } from '../../models/project.model';
import { EmployeeService } from '../../services/employee.service';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {
  fields: FieldModel[];
  project: ProjectModel;   

  constructor(public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService, public employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.project = this.data.project;
    this.initializeProjectForm();
  }

  initializeProjectForm(): void {
    this.employeeService.employees$.subscribe((employees) => {
      this.fields = [
        {
          name: 'projectID',
          priority: 2,
          type: '',
          value: this.project.projectID
        },
        {
          label: 'Project Name',
          name: 'projectName',
          placeHolder: 'Project Name',
          priority: 2,
          type: 'short-text',
          validationRules: ['pattern', 'required'],
          validatorPattern: '[A-Za-z0-9\.\-\_ ]+',
          value: this.project.projectName
        },
        {
          label: 'Date',
          name: 'date',
          placeHolder: 'Date',
          priority: 1,
          type: 'date',
          validationRules: ['required'],
          value: this.project.projectDate
        },
        {
          label: 'Is Active',
          name: 'isActive',
          placeHolder: 'Is Active',
          priority: 0,
          type: '',
          value: this.project.isActive
        },
        {
          fieldData: this.setEmployeeFieldData(employees),
          label: 'Employee Contact',
          name: 'contactEmployeeID',
          placeHolder: 'Employee Contact',
          priority: 0,
          type: 'select',
          value: this.project.contactEmployeeID
        }
      ];
    });
  }

  setEmployeeFieldData(employees: EmployeeModel[]): FieldDataModel[] {
    const employeeFieldData: FieldDataModel[] = [];

    if (employees?.length > 0) {
      employees.forEach((employee) => {
        employeeFieldData.push({displayName: employee.firstName + ' ' + employee.lastName, 
          value: employee.employeeID})
      })
    }
    return employeeFieldData;
  }

  updateValues(event: any): void {
    this.project = event;
  }

  newProject(): void {
    this.projectService.newProject(this.project);
  }

  saveProject(): void {
    console.log(this.project);
    this.projectService.saveProject(this.project);
  }

  deleteProject(): void {
    this.projectService.deleteProject(this.project.projectID);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
