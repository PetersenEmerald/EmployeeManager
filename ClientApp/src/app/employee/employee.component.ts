import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { ColumnDescription } from 'app/models/column.model';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  columns: ColumnDescription[] = [
    { name: 'employeeID', displayName: 'ID', columnType: 'id' },
    { name: 'isActive', displayName: 'Active', columnType: 'activeIcon' },
    { name: 'title', displayName: 'Title', columnType: 'column' },
    { name: 'firstName', displayName: 'First Name', columnType: 'column' },
    { name: 'lastName', displayName: 'Last Name', columnType: 'column' },
    { name: 'defaultPhoneNumber', displayName: 'Phone Number', columnType: 'column' },
    { name: 'email', displayName: 'Email', columnType: 'column' },    
  ];
  selectedRowIndex = -1;

  constructor(public dialog: MatDialog, public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getData();
    this.employeeService.getEmployees();
  }

  openEmployeeDialog(employee: any): void {
    this.dialog.open(EmployeeDialogComponent, {
      width: '750px',
      data: { employee: employee },
    });
  }
}
