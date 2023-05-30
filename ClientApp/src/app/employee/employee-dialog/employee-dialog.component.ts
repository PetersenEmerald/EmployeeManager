import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FieldModel } from '../../dynamic/models/field.model';
import { TabDataModel } from '../../dynamic/models/tab.model';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {
  tabData: TabDataModel;
  employee: EmployeeModel;
  fields: FieldModel[];

  constructor(public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.tabData = this.data.data;
  }

  updateValues(event: any): void {
    this.tabData.values = event;
    console.log(this.tabData);
  }

  newData(): void {
    const idName = this.getIDName();
    const lastIndex = this.tabData.view.data.length - 1;

    let newValues = this.tabData.values;
    newValues[idName] = this.tabData.view.data[lastIndex][idName] + 1;

    this.tabData.view.data.push(newValues);
    this.employeeService.saveData(this.tabData.view);
  }

  saveData(): void {
    const idName = this.getIDName();
    this.tabData.view.data[this.tabData.values[idName]] = this.tabData.values;
    this.employeeService.saveData(this.tabData.view);
  }

  deleteData(): void {
    const idName = this.getIDName();
    this.tabData.view.data.forEach((data, index) => {
      if (this.tabData.values[idName] === data[idName]) {
        this.tabData.view.data.splice(index, 1);
      }
    });
    this.employeeService.saveData(this.tabData.view);
    this.closeDialog();
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

  closeDialog(): void {
    this.dialogRef.close();
  }
}
