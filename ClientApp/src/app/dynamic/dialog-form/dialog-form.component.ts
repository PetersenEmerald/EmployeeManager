import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent {
  @Input() data: any;
  @Input() formTitle: string;
  @Output() deleteInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() newInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() saveInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() updateFieldsEvent: EventEmitter<any> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<DialogFormComponent>) {
    console.log(this.data);
  }

  updateValues(event: any): void {
    this.updateFieldsEvent.emit(event);
  }

  newInstance(): void {
    this.newInstanceEvent.emit();
  }

  saveInstance(): void {
    this.saveInstanceEvent.emit();
  }

  deleteInstance(): void {
    this.deleteInstanceEvent.emit();
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
