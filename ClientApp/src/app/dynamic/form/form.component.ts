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

  dynamicFormGroup: FormGroup;
  formControls: any[];

  constructor() { }

  ngOnInit() {
    this.buildForm();
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

    console.log({ formGroupFields });
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

  // @Input() fields: Field<any>[];
  // @Input() data: any;
  // @Output() valueChanged = new EventEmitter<any>();

  // clear(field: any) {
  //   this.data[field.fieldName] = null;
  // }
  // valueChange(field: any, value: any) {
  //   this.valueChanged.emit({ field, value });
  // }
}
