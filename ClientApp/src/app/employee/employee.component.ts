import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeColumns: string[] = ['firstName', 'defaultPhoneNumber', 'email'];
  selectedRowIndex = -1;

  constructor(public dialog: MatDialog, public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees();
  }

  openEmployeeDialog(employee: any): void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '250px',
      data: { employee: employee },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
