import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldDataModel, FieldModel } from '../../models/field.model';
import { TabModel } from '../../models/tab.model';
import { TabService } from '../../../services/tab.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() dynamicFormGroup: FormGroup;
  @Input() field: FieldModel;

  constructor(private tabService: TabService) { }

  ngOnInit(): void {
    const fieldData = this.field.fieldData[0];
    if (fieldData.dataType === 'property') {
      this.getPropertyFieldData(fieldData);
    }
  }

  getPropertyFieldData(fieldData: FieldDataModel): void {
    this.tabService.viewData$.subscribe(viewData => {
      let propertyNames: string[] = [];
      let valueName;

      // Gets the property names associated with the fieldID.
      // Gets the property for the value for the fieldData.
      fieldData.fieldDataDisplayID.forEach(fieldID => {
        viewData[fieldData.tabID].fields.forEach(field => {
          if (field.fieldID === fieldID) {
            propertyNames.push(field.name);
          }
          if (field.fieldID === fieldData.fieldValueID) {
            valueName = field.name;
          }
        })
      })

      this.setFieldData(viewData, fieldData, propertyNames, valueName);
    })
  }

  setFieldData(viewData: TabModel[], fieldData: FieldDataModel, propertyNames: string[], valueName: string): void {
    let values = [];

    viewData[fieldData.tabID].data.forEach(data => {
      let value;

      // Combines property values to make a string. Example: First Name + Last Name.
      propertyNames.forEach(property => {
        if (value) {
          value.data = value.data + " " + data[property];
        }
        else {
          value = { value: data[valueName], data: data[property] };
        }
      })

      values.push(value);
    })

    this.field.fieldData = values;
  }
}
