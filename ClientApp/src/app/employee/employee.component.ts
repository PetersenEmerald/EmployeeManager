import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { ColumnDescription } from 'app/models/column.model';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import { TabModel } from '../dynamic/models/tab.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() data: TabModel;
  columns: ColumnDescription[] = [];
  selectedRowIndex = -1;

  constructor(public dialog: MatDialog, public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getTableColumns();
  }

  getTableColumns(): void {
    this.data.fields.forEach((field) => {
      if (field.tableColumn) {
        this.columns.push(
          {
            name: field.name,
            displayName: field.displayName,
            columnType: field.columnType
          })
      }
    });
  }

  openEmployeeDialog(selectedRow: any): void {
    this.dialog.open(EmployeeDialogComponent, {
      width: '750px',
      data: {
        data: { view: this.data, values: selectedRow }
      },
    });
  }
}
