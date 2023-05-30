import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DateComponent } from './input/date/date.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { FormComponent } from './form/form.component';
import { SelectComponent } from './input/select/select.component';
import { ShortTextComponent } from './input/short-text/short-text.component';
import { SlideToggleComponent } from './input/slide-toggle/slide-toggle.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { TabDialogComponent } from './tab/tab-dialog/tab-dialog.component';

@NgModule({
  declarations: [
    DateComponent,
    DialogFormComponent,
    FormComponent,
    SelectComponent,
    ShortTextComponent,
    SlideToggleComponent,
    TabComponent,
    TabDialogComponent,
    TableComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    ReactiveFormsModule],
  entryComponents: [TabDialogComponent],
  exports: [DialogFormComponent, FormComponent, TabComponent, TableComponent],
  providers: [DatePipe]
})
export class DynamicModule { }
