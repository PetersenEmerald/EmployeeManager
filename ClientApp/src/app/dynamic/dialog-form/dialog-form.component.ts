import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldModel } from '../models/field.model';
import { TabDataModel } from '../models/tab.model';
import { TabService } from 'app/services/tab.service';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {
  @Input() formTitle: string;
  @Output() deleteInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() newInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() saveInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() updateFieldsEvent: EventEmitter<any> = new EventEmitter();

  fields: FieldModel[];
  tabData: TabDataModel;

  constructor(public dialogRef: MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public employeeService: TabService) { }

  ngOnInit(): void {
    this.tabData = this.data.data;
  }

  updateValues(event: any): void {
    this.tabData.values = event;
  }

  newInstance(): void {
    const idName = this.getIDName();
    const lastIndex = this.tabData.view.data.length - 1;

    let newValues = this.tabData.values;
    newValues[idName] = this.tabData.view.data[lastIndex][idName] + 1;

    this.tabData.view.data.push(newValues);
    this.employeeService.saveData(this.tabData.view);
  }

  saveInstance(): void {
    const idName = this.getIDName();
    this.tabData.view.data[this.tabData.values[idName]] = this.tabData.values;
    this.employeeService.saveData(this.tabData.view);
  }

  deleteInstance(): void {
    const idName = this.getIDName();
    this.tabData.view.data.forEach((data, index) => {
      if (this.tabData.values[idName] === data[idName]) {
        this.tabData.view.data.splice(index, 1);
      }
    });
    this.employeeService.saveData(this.tabData.view);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getIDName(): string {
    let idName;
    this.tabData.view.fields.some(field => {
      if (field.type.toString() === 'id') {
        idName = field.name;
        return;
      }
    });
    return idName;
  }
}
