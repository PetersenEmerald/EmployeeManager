import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnDescription } from 'app/models/column.model';
import { TabService } from '../services/tab.service';
import { TabModel } from '../models/tab.model';
import { TabDialogComponent } from './tab-dialog/tab-dialog.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() data: TabModel;
  columns: ColumnDescription[] = [];
  selectedRowIndex = -1;

  constructor(public dialog: MatDialog, public employeeService: TabService) { }

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
    this.dialog.open(TabDialogComponent, {
      width: '750px',
      data: {
        data: { view: this.data, values: selectedRow }
      },
    });
  }
}
