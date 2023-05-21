import { Component, Inject, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeModel } from '../../models/employee.model';
import { Field } from '../models/field.model';
import { ShortText } from '../models/short-text.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent{
  @Input() fields: any;
  @Input() data: any;
  @Input() model: any;

  constructor(public dialogRef: MatDialogRef<DialogFormComponent>) {
  }

  onSubmit(event: any): void {
    event.preventDefault();
    console.log('got data', this.data);
  }

  newEmployee(): void {
    // this.employeeService.newEmployee(this.prepareEmployee());
  }

  saveEmployee(): void {
    // this.employeeService.saveEmployee(this.prepareEmployee());
  }

  deleteEmployee(): void {
    // this.employeeService.deleteEmployee(this.data.employee.employeeID);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
