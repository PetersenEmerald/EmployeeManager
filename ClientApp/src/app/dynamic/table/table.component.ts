import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDescription } from 'app/models/column.model';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataSource: any = new MatTableDataSource();
  @Output() rowClickEvent = new EventEmitter<string>();

  columns: ColumnDescription[] = [];
  datePipe: DatePipe = new DatePipe('en-US');
  displayedColumns: string[] = [];
  isFirstLoad = true;
  rowID = '';
  selectedRowIndex = -1;

  constructor(public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.getTableColumns();
    this.displayedColumns = this.columns.map((column: ColumnDescription) => column.name);
    this.columns.forEach(column => {
      if (column.columnType === 'id') {
        this.rowID = column.name;
        return;
      }
    });

    console.log(this.columns)
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

  async getTableColumns(): Promise<void> {
    this.dataSource.fields.forEach((field) => {
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

  openDialog(selectedRow: any): void {
    this.dialog.open(DialogFormComponent, {
      width: '750px',
      data: {
        data: { view: this.dataSource, values: selectedRow }
      },
    });
  }
}
