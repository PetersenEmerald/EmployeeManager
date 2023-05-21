import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../models/field.model';
import { FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormGroupDirective]
})
export class FormComponent {
  @Input() data: any;
  @Input() fields: Field[];
  @Output() updateFieldsEvent: EventEmitter<any> = new EventEmitter();
  @Output() newInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() saveInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteInstanceEvent: EventEmitter<any> = new EventEmitter();

  dynamicFormGroup: FormGroup;
  formControls: any[];

  constructor() { }

  ngOnInit() {
    this.buildForm();
    this.dynamicFormGroup.valueChanges.subscribe(value => {
        if (this.dynamicFormGroup.dirty) {          
          this.updateFieldsEvent.emit(this.dynamicFormGroup.value);
        }
      });
  }

  private buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  private getFormControlsFields() {
    const formGroupFields = {};
    for (const field of this.fields) {
      // const validators = this.addValidator(fieldProps.rules);
      const validators = null;
      formGroupFields[field.name] = new FormControl(field.value, validators);
    }

    return formGroupFields;
  }

  private addValidator(rules) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case "required":
          return Validators.required;
        //add more case for future.
      }
    });
    return validators;
  }

  newInstance(): void {
    this.newInstanceEvent.emit();
  }

  saveInstance(): void {
    this.saveInstanceEvent.emit();
  }

  deleteInstance(): void {
    this.deleteInstanceEvent.emit();
  }
}
