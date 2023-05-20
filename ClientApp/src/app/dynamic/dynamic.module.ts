import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { FormComponent } from './form/form.component';
import { ShortTextComponent } from './form/short-text/short-text.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [DialogFormComponent, FormComponent, ShortTextComponent, TableComponent],
  imports: [
    CommonModule, 
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule, 
    ReactiveFormsModule],
  exports: [DialogFormComponent, FormComponent, ShortTextComponent, TableComponent],
})
export class DynamicModule {}