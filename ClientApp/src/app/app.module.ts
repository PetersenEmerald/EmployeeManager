
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DateComponent } from './dynamic/date/date.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SelectComponent } from './dynamic/select/select.component';
import { TableComponent } from './dynamic/table/table.component';
import { TextComponent } from './dynamic/text/text.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDialogComponent } from './employee/employee-dialog/employee-dialog.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDialogComponent } from './project/project-dialog/project-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    DynamicComponent,
    EmployeeComponent,
    EmployeeDialogComponent,
    HomeComponent,
    ProjectComponent,
    ProjectDialogComponent,
    SelectComponent,
    TableComponent,
    TextComponent,
  ],
  entryComponents: [EmployeeDialogComponent, ProjectDialogComponent],
  exports: [MatSortModule],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ], { relativeLinkResolution: 'legacy' })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
