import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private employeeService: EmployeeService) {
    if (data) {
      this.employeeForm = new FormGroup({
        cellNumberControl: new FormControl(data.employee.cellNumber),
        defaultPhoneNumberControl: new FormControl(data.employee.defaultPhoneNumber),
        emailControl: new FormControl(data.employee.email),
        faxControl: new FormControl(data.employee.fax),
        firstNameControl: new FormControl(data.employee.firstName),
        homeFaxControl: new FormControl(data.employee.homeFax),
        homePhoneNumberControl: new FormControl(data.employee.homePhoneNumber),
        isActiveControl: new FormControl(data.employee.isActive),
        lastNameControl: new FormControl(data.employee.lastName),
        titleControl: new FormControl(data.employee.title)
      });
    }
  }

  ngOnInit(): void { }

  prepareEmployee(): EmployeeModel {
    const employee: EmployeeModel = {
      cellNumber: this.employeeForm.controls.cellNumberControl.value,
      defaultPhoneNumber: this.employeeForm.controls.defaultPhoneNumberControl.value,
      email: this.employeeForm.controls.emailControl.value,
      employeeID: this.data.employee.employeeID,
      fax: this.employeeForm.controls.faxControl.value,
      firstName: this.employeeForm.controls.firstNameControl.value,
      homeFax: this.employeeForm.controls.homeFaxControl.value,
      homePhoneNumber: this.employeeForm.controls.homePhoneNumberControl.value,
      isActive: this.employeeForm.controls.isActiveControl.value,
      lastName: this.employeeForm.controls.lastNameControl.value,
      title: this.employeeForm.controls.titleControl.value,
    }

    return employee;
  }

  createEmployee(): void {
    console.log('create');
    this.employeeService.createEmployee(this.prepareEmployee());
  }

  updateEmployee(): void {
   

    this.employeeService.updateEmployee(this.prepareEmployee());
  }

  deleteEmployee(): void {
    console.log('delete');
    this.employeeService.deleteEmployee(this.data.employee.employeeID);
  }
}
