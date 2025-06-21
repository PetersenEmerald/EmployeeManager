import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { TabService } from 'app/services/tab.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormGroupDirective]
})
export class FormComponent implements AfterViewInit, OnInit {
  @Input() data: any;
  @Input() formTitle: string;
  @Output() closeDialogEvent: EventEmitter<any> = new EventEmitter();

  dynamicFormGroup: FormGroup;
  formControls: any[];

  constructor(private cdr: ChangeDetectorRef, private employeeService: TabService) { }

  ngOnInit() {
    this.buildForm();

    this.dynamicFormGroup.valueChanges.subscribe(() => {
      if (this.dynamicFormGroup.dirty) {
        this.updateValues(this.dynamicFormGroup.value);
      }
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
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

  updateValues(event: any): void {
    this.data.values = event;
  }

  createRecord(): void {
    const idName = this.getIDName();
    const lastIndex = this.data.view.data.length - 1;

    let newValues = this.data.values;
    newValues[idName] = this.data.view.data[lastIndex][idName] + 1;

    this.data.view.data.push(newValues);
    this.employeeService.saveData(this.data.view);

    // TODO: Add toast about creation. Add option to open to switch to this new record.
  }

  saveRecord(): void {
    const idName = this.getIDName();
    this.data.view.data[this.data.values[idName]] = this.data.values;
    this.employeeService.saveData(this.data.view);

    // TODO: Add dialog about saving.
  }

  deleteRecord(): void {
    const idName = this.getIDName();
    this.data.view.data.forEach((data, index) => {
      if (this.data.values[idName] === data[idName]) {
        this.data.view.data.splice(index, 1);
      }
    });
    this.employeeService.saveData(this.data.view);
    this.closeDialogEvent.emit();
  }

  getIDName(): string {
    let idName;
    this.data.view.fields.some(field => {
      if (field.type.toString() === 'id') {
        idName = field.name;
        return;
      }
    });
    return idName;
  }
}
