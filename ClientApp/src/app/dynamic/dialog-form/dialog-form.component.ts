import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

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
