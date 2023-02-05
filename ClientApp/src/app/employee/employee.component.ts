import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { ColumnDescription } from 'src/app/models/column.model';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  columns: ColumnDescription[] = [
    { name: 'employeeID', displayName: 'ID', columnType: 'id' },
    { name: 'isActive', displayName: 'Active', columnType: '' },
    { name: 'title', displayName: 'Title', columnType: '' },
    { name: 'firstName', displayName: 'First Name', columnType: '' },
    { name: 'lastName', displayName: 'Last Name', columnType: '' },
    { name: 'defaultPhoneNumber', displayName: 'Phone Number', columnType: '' },
    { name: 'email', displayName: 'Email', columnType: '' },    
  ];
  employeeColumns: string[] = ['isActive', 'firstName', 'defaultPhoneNumber', 'email'];
  selectedRowIndex = -1;

  constructor(public dialog: MatDialog, public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees();
  }

  openEmployeeDialog(employee: any): void {
    this.dialog.open(EmployeeDialogComponent, {
      width: '500px',
      data: { employee: employee },
    });
  }

  highlight(employeeID) {
    if (this.selectedRowIndex != employeeID) {
      this.selectedRowIndex = employeeID;
    }
    else {
      this.selectedRowIndex = -1;
    }
  }
}
