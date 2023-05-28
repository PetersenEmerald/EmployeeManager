import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldModel } from 'app/dynamic/models/field.model';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input() dynamicFormGroup: FormGroup;
  @Input() field: FieldModel;

  constructor() { }

  ngOnInit(): void {
  }
}
