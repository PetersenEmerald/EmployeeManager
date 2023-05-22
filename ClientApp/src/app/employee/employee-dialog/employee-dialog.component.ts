import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FieldModel } from '../../dynamic/models/field.model';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {
  employee: EmployeeModel;
  fields: FieldModel[];

  constructor(public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.data.employee;
    this.initializeEmployeeForm();
  }

  initializeEmployeeForm(): void {
    this.fields = [
      {
        name: 'employeeID',
        priority: 0,
        type: '',
        value: this.employee.employeeID
      },
      {
        placeHolder: 'Default Phone Number',
        label: 'Default Phone Number',
        name: 'defaultPhoneNumber',
        priority: 1,
        type: 'short-text',
        validationRules: ['required', 'pattern'],
        validatorPattern: '[- +()0-9]+',
        value: this.employee.defaultPhoneNumber
      },
      {
        placeHolder: 'Email',
        label: 'Email',
        name: 'email',
        priority: 2,
        type: 'short-text',
        validationRules: ['required', 'email'],
        value: this.employee.email
      },
      {
        placeHolder: 'Fax',
        label: 'Fax',
        name: 'fax',
        priority: 7,
        type: 'short-text',
        value: this.employee.fax
      },
      {
        placeHolder: 'First Name',
        label: 'First Name',
        name: 'firstName',
        priority: 3,
        type: 'short-text',
        value: this.employee.firstName,
        validationRules: ['required', 'pattern'],
        validatorPattern: '[A-Za-z0-9\-\_]+'
      },
      {
        placeHolder: 'Is Active',
        label: 'Is Active',
        name: 'isActive',
        priority: 8,
        type: '',
        value: this.employee.isActive
      },
      {
        placeHolder: 'Last Name',
        label: 'Last Name',
        name: 'lastName',
        priority: 4,
        type: 'short-text',
        validationRules: ['required', 'pattern'],
        validatorPattern: '[A-Za-z0-9\-\_]+',
        value: this.employee.lastName
      },
      {
        placeHolder: 'Title',
        label: 'Title',
        name: 'title',
        priority: 5,
        type: 'short-text',
        value: this.employee.title
      },
    ];
  }

  updateValues(event: any): void {
    this.employee = event;
  }

  newEmployee(): void {
    this.employeeService.newEmployee(this.employee);
  }

  saveEmployee(): void {
    this.employeeService.saveEmployee(this.employee);
  }

  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.employee.employeeID);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
