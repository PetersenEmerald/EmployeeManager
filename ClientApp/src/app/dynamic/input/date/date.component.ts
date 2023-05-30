import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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

  constructor(private cdr: ChangeDetectorRef, private datepipe: DatePipe) { }

  ngOnInit(): void {
    var dateValue = new Date(this.dynamicFormGroup.value[this.field.name]);
    this.dynamicFormGroup.value[this.field.name] = new Date(dateValue);
  }

  changeDatePicker(): any {
    var dateValue = this.dynamicFormGroup.value[this.field.name];
    this.dynamicFormGroup.value[this.field.name] = this.datepipe.transform(dateValue, 'MM/dd/YYYY');
  }
}
