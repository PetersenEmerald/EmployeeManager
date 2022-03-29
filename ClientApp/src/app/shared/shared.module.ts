import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { MatTableModule } from '@angular/material/table';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicDropdownComponent } from './dynamic-form/dynamic-dropdown/dynamic-dropdown.component';

@NgModule({
  declarations: [DynamicTableComponent, DynamicDropdownComponent, DynamicFormComponent],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class SharedModule { }
