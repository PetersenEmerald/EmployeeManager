import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeModel } from '../../models/employee.model';
import { Field } from '../../dynamic/models/field.model';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {
  employee: EmployeeModel;
  fields: Field[];

  constructor(public dialogRef: MatDialogRef<EmployeeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initializeEmployeeForm();
  }

  initializeEmployeeForm(): void {
    this.fields = [
      {
        placeHolder: 'Default Phone Number',
        label: 'Default Phone Number',
        name: 'defaultPhoneNumber',
        priority: 2,
        type: 'short-text',
        value: this.data.employee.defaultPhoneNumber
      },
      {
        placeHolder: 'Email',
        label: 'Email',
        name: 'email',
        priority: 1,
        type: 'short-text',
        value: this.data.employee.email
      },
      {
        placeHolder: 'Employee ID',
        label: 'Employee ID',
        name: 'employeeID',
        priority: 0,
        type: 'short-text',
        value: this.data.employee.employeeID
      },
      {
        placeHolder: 'Fax',
        label: 'Fax',
        name: 'fax',
        priority: 0,
        type: 'short-text',
        value: this.data.employee.fax
      },
      {
        placeHolder: 'First Name',
        label: 'First Name',
        name: 'firstName',
        priority: 0,
        type: 'short-text',
        value: this.data.employee.firstName
      },
      {
        placeHolder: 'Is Active',
        label: 'Is Active',
        name: 'isActive',
        priority: 0,
        type: 'short-text',
        value: this.data.employee.isActive
      },
      {
        placeHolder: 'Last Name',
        label: 'Last Name',
        name: 'lastName',
        priority: 0,
        type: 'short-text',
        value: this.data.employee.lastName
      },
      {
        placeHolder: 'Title',
        label: 'Title',
        name: 'title',
        priority: 0,
        type: 'short-text',
        value: this.data.employee.title
      },
    ];
  }

  newEmployee(): void {
    // this.employeeService.newEmployee(this.prepareEmployee());
  }

  saveEmployee(): void {
    //this.employeeService.saveEmployee(this.prepareEmployee());
  }

  deleteEmployee(): void {
    // this.employeeService.deleteEmployee(this.data.employee.employeeID);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
