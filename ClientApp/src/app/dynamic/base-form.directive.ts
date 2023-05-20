import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Field } from './models/field.model';
@Directive({
  selector: 'base-form',
})
export class BaseFormDirective {
  @Input() field: Field<any>;
  @Input() value: any;
  @Output() clear = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<any>();

  get inputValue(): any {
    return this.value;
  }

  set inputValue(newValue: any) {
    this.value = newValue;
    this.valueChange.emit(this.value);
  }
}
