import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeModel } from '../../models/employee.model';
import { Field } from '../../dynamic/models/field.model';
import { ShortText } from '../../dynamic/models/short-text.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {
  data: {
    cellNumber: string;
    defaultPhoneNumber: string;
    email: string;
    employeeID: number;
    fax: string;
    firstName: string;
    homeFax: string;
    isActive: boolean;
    lastName: string;
    title: string;
  } = {
    cellNumber: 'aaaa',
    defaultPhoneNumber: 'bbbbb',
    email: 'street',
    employeeID: 3223432,
    fax: '',
    firstName: 'Tester',
    homeFax: '11',
    isActive: true,
    lastName: 'Testing',
    title: 'Devolper',
    };

  fields: Field<any>[] = [
    new ShortText({
      placeHolder: 'Cell Number',
      label: 'Cell Number',
      name: 'cellNumber',
      priority: 3,
    }),
    new ShortText({
      placeHolder: 'Default Phone Number',
      label: 'Default Phone Number',
      name: 'defaultPhoneNumber',
      priority: 2,
    }),
    new ShortText({
      placeHolder: 'Email',
      label: 'Email',
      name: 'email',
      priority: 1,
    }),
    new ShortText({
      placeHolder: 'Employee ID',
      label: 'Employee ID',
      name: 'employeeID',
      priority: 0,
    }),new ShortText({
      placeHolder: 'Fax',
      label: 'Fax',
      name: 'fax',
      priority: 0,
    }),
    new ShortText({
      placeHolder: 'First Name',
      label: 'First Name',
      name: 'firstName',
      priority: 0,
    }),
    new ShortText({
      placeHolder: 'Home Fax',
      label: 'Home Fax',
      name: 'homeFax',
      priority: 0,
    }),
    new ShortText({
      placeHolder: 'Home Phone Number',
      label: 'Home Phone Number',
      name: 'homePhoneNumber',
      priority: 0,
    }),
    new ShortText({
      placeHolder: 'Is Active',
      label: 'Is Active',
      name: 'isActive',
      priority: 0,
    }),
    new ShortText({
      placeHolder: 'Last Name',
      label: 'Last Name',
      name: 'lastName',
      priority: 0,
    }),
    new ShortText({
      placeHolder: 'Title',
      label: 'Title',
      name: 'title',
      priority: 0,
    }),
  ];

  employeeFormGroup = new FormGroup({
    cellNumberControl: new FormControl(),
    defaultPhoneNumberControl: new FormControl(),
    emailControl: new FormControl('', [Validators.required, Validators.email]),
    faxControl: new FormControl(),
    firstNameControl: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9\-\_]+')]),
    homeFaxControl: new FormControl(),
    homePhoneNumberControl: new FormControl('', Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')),
    isActiveControl: new FormControl(),
    lastNameControl: new FormControl('', Validators.required),
    titleControl: new FormControl(),
  })

  constructor(public dialogRef: MatDialogRef<EmployeeDialogComponent>, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.initializeEmployeeForm();
  }

  initializeEmployeeForm(): void {
    // if (this.data ?.employee) {
    //   this.employeeFormGroup.controls.cellNumberControl.setValue(this.data.employee.cellNumber);
    //   this.employeeFormGroup.controls.defaultPhoneNumberControl.setValue(this.data.employee.defaultPhoneNumber);
    //   this.employeeFormGroup.controls.emailControl.setValue(this.data.employee.email);
    //   this.employeeFormGroup.controls.faxControl.setValue(this.data.employee.fax);
    //   this.employeeFormGroup.controls.firstNameControl.setValue(this.data.employee.firstName);
    //   this.employeeFormGroup.controls.homeFaxControl.setValue(this.data.employee.homeFax);
    //   this.employeeFormGroup.controls.homePhoneNumberControl.setValue(this.data.employee.homePhoneNumber);
    //   this.employeeFormGroup.controls.isActiveControl.setValue(this.data.employee.isActive);
    //   this.employeeFormGroup.controls.lastNameControl.setValue(this.data.employee.lastName);
    //   this.employeeFormGroup.controls.titleControl.setValue(this.data.employee.title);
    // }
  }

  // prepareEmployee(): EmployeeModel {
  //   const employee: EmployeeModel = {
  //     cellNumber: this.employeeFormGroup.controls.cellNumberControl.value,
  //     defaultPhoneNumber: this.employeeFormGroup.controls.defaultPhoneNumberControl.value,
  //     email: this.employeeFormGroup.controls.emailControl.value,
  //     employeeID: this.data.employee.employeeID,
  //     fax: this.employeeFormGroup.controls.faxControl.value,
  //     firstName: this.employeeFormGroup.controls.firstNameControl.value,
  //     homeFax: this.employeeFormGroup.controls.homeFaxControl.value,
  //     homePhoneNumber: this.employeeFormGroup.controls.homePhoneNumberControl.value,
  //     isActive: this.employeeFormGroup.controls.isActiveControl.value,
  //     lastName: this.employeeFormGroup.controls.lastNameControl.value,
  //     title: this.employeeFormGroup.controls.titleControl.value,
  //   }

  //   return employee;
  // }

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
