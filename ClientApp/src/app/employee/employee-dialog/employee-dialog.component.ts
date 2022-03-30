import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {
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

  constructor(public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.initializeEmployeeForm();
  }

  initializeEmployeeForm(): void {
    if (this.data?.employee) {
      this.employeeFormGroup.controls.cellNumberControl.setValue(this.data.employee.cellNumber);
      this.employeeFormGroup.controls.defaultPhoneNumberControl.setValue(this.data.employee.defaultPhoneNumber);
      this.employeeFormGroup.controls.emailControl.setValue(this.data.employee.email);
      this.employeeFormGroup.controls.faxControl.setValue(this.data.employee.fax);
      this.employeeFormGroup.controls.firstNameControl.setValue(this.data.employee.firstName);
      this.employeeFormGroup.controls.homeFaxControl.setValue(this.data.employee.homeFax);
      this.employeeFormGroup.controls.homePhoneNumberControl.setValue(this.data.employee.homePhoneNumber);
      this.employeeFormGroup.controls.isActiveControl.setValue(this.data.employee.isActive);
      this.employeeFormGroup.controls.lastNameControl.setValue(this.data.employee.lastName);
      this.employeeFormGroup.controls.titleControl.setValue(this.data.employee.title);
    }
  }

  prepareEmployee(): EmployeeModel {
    const employee: EmployeeModel = {
      cellNumber: this.employeeFormGroup.controls.cellNumberControl.value,
      defaultPhoneNumber: this.employeeFormGroup.controls.defaultPhoneNumberControl.value,
      email: this.employeeFormGroup.controls.emailControl.value,
      employeeID: this.data.employee.employeeID,
      fax: this.employeeFormGroup.controls.faxControl.value,
      firstName: this.employeeFormGroup.controls.firstNameControl.value,
      homeFax: this.employeeFormGroup.controls.homeFaxControl.value,
      homePhoneNumber: this.employeeFormGroup.controls.homePhoneNumberControl.value,
      isActive: this.employeeFormGroup.controls.isActiveControl.value,
      lastName: this.employeeFormGroup.controls.lastNameControl.value,
      title: this.employeeFormGroup.controls.titleControl.value,
    }

    return employee;
  }

  newEmployee(): void {
    this.employeeService.newEmployee(this.prepareEmployee());
  }

  editEmployee(): void {
    this.employeeService.editEmployee(this.prepareEmployee());
  }

  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.data.employee.employeeID);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
