import { Component, OnInit } from '@angular/core';
import { TabService } from '../services/tab.service';
import { TabModel } from 'app/dynamic/models/tab.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public viewData: TabModel[] = [];

  constructor(public employeeService: TabService) { }

  ngOnInit(): void {
    this.employeeService.getViewData();
    // this.employeeService.viewData$.subscribe((viewData) => {
    //   console.log({viewData})
    // })
  }
}
