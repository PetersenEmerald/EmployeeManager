import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TabService } from 'app/services/tab.service';
import { FieldModel } from '../models/field.model';
import { TabDataModel } from '../models/tab.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  fields: FieldModel[];
  tabData: TabDataModel;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public employeeService: TabService) { }

  ngOnInit(): void {
    this.tabData = this.data.data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
