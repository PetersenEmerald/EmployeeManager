import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeModel } from '../../models/employee.model';
import { ProjectModel } from '../../models/project.model';
import { EmployeeService } from '../../services/employee.service';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {
  employees: EmployeeModel;
  projectFormGroup = new FormGroup({
    projectNameControl: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9\.\-\_ ]+')]),
    projectDateControl: new FormControl('', Validators.required),
    contactEmployeeControl: new FormControl('', Validators.required),
  })

  constructor(public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService, public employeeService: EmployeeService) {
  }
  ngOnInit(): void {
    this.initializeProjectForm();
  }

  initializeProjectForm(): void {
    if (this.data?.project) {
      this.projectFormGroup.controls.projectNameControl.setValue(this.data.project.projectName);
      this.projectFormGroup.controls.projectDateControl.setValue(this.data.project.projectDate);
      this.projectFormGroup.controls.contactEmployeeControl.setValue(this.data.project.contactEmployeeID);
    }
  }

  prepareProject(): ProjectModel {
    const project: ProjectModel = {
      contactEmployeeID: this.projectFormGroup.controls.contactEmployeeControl.value,
      projectDate: this.projectFormGroup.controls.projectDateControl.value,
      projectName: this.projectFormGroup.controls.projectNameControl.value,
      projectID: this.data.project.projectID
    }

    return project;
  }

  newProject(): void {
    this.projectService.newProject(this.prepareProject());
  }

  editProject(): void {
    this.projectService.editProject(this.prepareProject());
  }

  deleteProject(): void {
    this.projectService.deleteProject(this.data.project.projectID);
    this.closeDialog();
  }  

  closeDialog(): void {
    this.dialogRef.close();
  }

}
