import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeDialogComponent } from 'src/app/employee/employee-dialog/employee-dialog.component';
import { ColumnDescription } from 'src/app/models/column.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() dataSource: any = new MatTableDataSource();
  @Output() newItemEvent = new EventEmitter<string>();
  datePipe: DatePipe = new DatePipe('en-US');
  columns: ColumnDescription[] = [
    { name: 'cellNumber', displayName: 'cellNumber', columnType: '' },
    { name: 'defaultPhoneNumber', displayName: 'defaultPhoneNumber', columnType: '' },
    { name: 'email', displayName: 'email', columnType: '' },
    { name: 'employeeID', displayName: 'employeeID', columnType: 'id' },
    { name: 'fax', displayName: 'fax', columnType: '' },
    { name: 'firstName', displayName: 'firstName', columnType: '' },
    { name: 'homeFax', displayName: 'homeFax', columnType: '' },
    { name: 'homePhoneNumber', displayName: 'homePhoneNumber', columnType: '' },
    { name: 'isActive', displayName: 'isActive', columnType: '' },
    { name: 'lastName', displayName: 'lastName', columnType: '' },
    { name: 'title', displayName: 'title', columnType: '' },
  ];
  displayColumns: string[] = [];
  isFirstLoad = true;
  rowIdentifier = '';
  selectedRowIndex = -1;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayColumns = this.columns.map((column: ColumnDescription) => column.name);
    this.columns.forEach(data => {
      if (data.columnType === 'id') {
        this.rowIdentifier = data.name;
        return;
      }
    });
  }

  outputRow(row){
    this.newItemEvent.emit(row);
  }

  highlight(row) {
    console.log({ row });
    const rowID = row[this.rowIdentifier];
    console.log(rowID);
    if (this.selectedRowIndex != rowID) {
      this.selectedRowIndex = rowID;
    }
    else {
      this.selectedRowIndex = -1;
    }
  }
}
