import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldModel } from '../../models/field.model';

@Component({
  selector: 'app-short-text',
  templateUrl: './short-text.component.html',
  styleUrls: ['./short-text.component.css']
})
export class ShortTextComponent {
  @Input() dynamicFormGroup: FormGroup;
  @Input() field: FieldModel;
}
