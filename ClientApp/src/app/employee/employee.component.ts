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

  // model: = {
  //   firstName: {
  //     type: "text",
  //     value: "",
  //     label: "First Name",
  //     rules: {
  //       required: true,
  //     }
  //   },
  //   lastName: {
  //     type: "text",
  //     value: "",
  //     label: "LastName"
  //   },
  //   email: {
  //     type: "text",
  //     value: "",
  //     label: "Email",
  //   },
  //   // age: {
  //   //   type: "number",
  //   //   value: "",
  //   //   label: "age"
  //   // },
  //   // birthDay: {
  //   //   type: "date",
  //   //   value: "",
  //   //   label: "Birthday",
  //   // },
  //   // typeBussines: {
  //   //   label: "Bussines Type",
  //   //   value: "premium",
  //   //   type: "radio",
  //   //   options: [
  //   //     {
  //   //       label: "Enterprise",
  //   //       value: "1500",
  //   //     },
  //   //     {
  //   //       label: "Home",
  //   //       value: "6",
  //   //     },
  //   //     {
  //   //       label: "Personal",
  //   //       value: "1",
  //   //     },
  //   //   ],

  //   // },
  //   // newsletterIn: {
  //   //   label: "Suscribe to newsletter",
  //   //   value: "email",
  //   //   type: "checkbox",
  //   // },
  //   // subscriptionType: {
  //   //   label: "Suscription Type",
  //   //   value: "premium",
  //   //   type: "select",
  //   //   options: [
  //   //     {
  //   //       label: "Pick one",
  //   //       value: "",
  //   //     },
  //   //     {
  //   //       label: "Premium",
  //   //       value: "premium",
  //   //     },
  //   //     {
  //   //       label: "Basic",
  //   //       value: "basic",
  //   //     },
  //   //   ],
  //   // },
  //   // country: {
  //   //   id: 'country',
  //   //   label: "Country",
  //   //   type: "select",
  //   //   options: [
  //   //     {
  //   //       label: "Spain",
  //   //       value: "ES"
  //   //     },
  //   //     {
  //   //       label: "USA",
  //   //       value: "US"
  //   //     }
  //   //   ],
  //   //   provideData: [
  //   //     {
  //   //       label: 'Barcelona',
  //   //       sourceValue: 'ES',
  //   //       value: 'BCN'
  //   //     },
  //   //     {
  //   //       label: 'Madrid',
  //   //       sourceValue: 'ES',
  //   //       value: 'MDN'
  //   //     },
  //   //     {
  //   //       label: 'New York',
  //   //       sourceValue: 'US',
  //   //       value: 'NYC'
  //   //     },
  //   //     {
  //   //       label: 'Cleveland',
  //   //       sourceValue: 'CLV',
  //   //       value: 'E'
  //   //     }
  //   //   ]

  //   // },
  //   // city: {
  //   //   label: "City",
  //   //   type: "select",
  //   //   link: 'country',
  //   //   value: "",
  //   //   options: [
  //   //     {
  //   //       label: "Select Country First",
  //   //       value: ""
  //   //     }
  //   //   ]
  //   // }
  // };

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
}
