import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { FormComponent } from './form/form.component';
import { ShortTextComponent } from './form/short-text/short-text.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [FormComponent, ShortTextComponent, TableComponent],
  imports: [
    CommonModule, 
    FormsModule,
    MatIconModule,
    MatTableModule, 
    ReactiveFormsModule],
  exports: [FormComponent, ShortTextComponent, TableComponent],
})
export class DynamicModule {}