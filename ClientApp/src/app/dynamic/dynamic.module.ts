import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { DateComponent } from './input/date/date.component';
import { SelectComponent } from './input/select/select.component';
import { ShortTextComponent } from './input/short-text/short-text.component';
import { SlideToggleComponent } from './input/slide-toggle/slide-toggle.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    ButtonComponent,
    DateComponent,
    DialogComponent,
    FormComponent,
    SelectComponent,
    ShortTextComponent,
    SlideToggleComponent,
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
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    ReactiveFormsModule],
  exports: [DialogComponent, FormComponent, TableComponent],
  providers: [DatePipe]
})
export class DynamicModule { }
