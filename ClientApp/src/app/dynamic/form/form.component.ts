import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../models/field.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() fields: Field<any>[];
  @Input() data: any;
  @Output() valueChanged = new EventEmitter<any>();

  clear(field: any) {
    this.data[field.fieldName] = null;
  }
  valueChange(field: any, value: any) {
    this.valueChanged.emit({ field, value });
  }
}
