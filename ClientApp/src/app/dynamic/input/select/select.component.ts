import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldModel } from 'app/dynamic/models/field.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() dynamicFormGroup: FormGroup;
  @Input() field: FieldModel;
  
  constructor() { }

  ngOnInit(): void {
  }
}
