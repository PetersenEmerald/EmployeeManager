import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { FieldModel } from '../models/field.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormGroupDirective]
})
export class FormComponent {
  @Input() data: any;
  @Input() formTitle: string;
  @Output() deleteInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() newInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() saveInstanceEvent: EventEmitter<any> = new EventEmitter();
  @Output() updateFieldsEvent: EventEmitter<any> = new EventEmitter();

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
    for (const field of this.data.view.fields) {
      const validators = this.addValidator(field);
      formGroupFields[field.name] = new FormControl(this.data.values[field.name], validators);
    }

    return formGroupFields;
  }

  private addValidator(field) {
    if (!field.validationRules) {
      return [];
    }

    const validators = field.validationRules.map((validator) => {
      switch (validator) {
        case "email":
          return Validators.email;
        case "pattern":
          return Validators.pattern(field.validatorPattern);
        case "required":
          return Validators.required;        
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
