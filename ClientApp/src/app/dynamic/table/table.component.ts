import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDescription } from 'app/models/column.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() columns: ColumnDescription[] = [];
  @Input() dataSource: any = new MatTableDataSource();
  @Output() rowClickEvent = new EventEmitter<string>();

  datePipe: DatePipe = new DatePipe('en-US');
  displayedColumns: string[] = [];
  isFirstLoad = true;
  rowID = '';
  selectedRowIndex = -1;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((column: ColumnDescription) => column.name);
    this.columns.forEach(column => {
      if (column.columnType === 'id') {
        this.rowID = column.name;
        return;
      }
    });
  }

  outputRow(row): void {
    this.rowClickEvent.emit(row);
  }

  highlight(row): void {
    const rowID = row[this.rowID];
    if (this.selectedRowIndex != rowID) {
      this.selectedRowIndex = rowID;
    }
    else {
      this.selectedRowIndex = -1;
    }
  }
}
