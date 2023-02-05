import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { ColumnDescription } from 'src/app/models/column.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() dataSource: any = new MatTableDataSource();
  @Input() columns: ColumnDescription[] = [];
  @Output() rowClickEvent = new EventEmitter<string>();
  @ViewChild('empTbSort') empTbSort = new MatSort();
  datePipe: DatePipe = new DatePipe('en-US');
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

  outputRow(row) {
    this.rowClickEvent.emit(row);
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
