import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { FormComponent } from './form/form.component';
import { ShortTextComponent } from './form/short-text/short-text.component';
import { TableComponent } from './table/table.component';
import { FieldComponent } from './form/field/field.component';
import { InputComponent } from './form/field/input/input.component';

@NgModule({
  declarations: [DialogFormComponent, FormComponent, ShortTextComponent, TableComponent, FieldComponent, InputComponent],
  imports: [
    CommonModule, 
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule, 
    ReactiveFormsModule],
  exports: [DialogFormComponent, FormComponent, ShortTextComponent, TableComponent],
})
export class DynamicModule {}