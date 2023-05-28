import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldModel } from 'app/dynamic/models/field.model';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {
  @Input() dynamicFormGroup: FormGroup;
  @Input() field: FieldModel;
  
  constructor() { }

  ngOnInit(): void {
  }
}
