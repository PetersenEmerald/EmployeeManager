import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectModel } from '../models/project.model';
import { ProjectHttpService } from './project-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects$: BehaviorSubject<ProjectModel[]> = new BehaviorSubject([]);

  constructor(private projectHttpService: ProjectHttpService) { }

  getProjects(): void {
    this.projectHttpService.getProjects().subscribe(result => {
      this.projects$.next(result);
    }, error => console.error(error));
  }

  newProject(project: ProjectModel): void {
    this.projectHttpService.newProject(project).subscribe(result => {
      this.projects$.next(result);
    }, error => console.error(error));
  }

  editProject(project: ProjectModel): void {
    this.projectHttpService.editProject(project).subscribe(result => {
      this.projects$.next(result);
    }, error => console.error(error));
  }

  deleteProject(projectID: number): void {
    this.projectHttpService.deleteProject(projectID).subscribe(result => {
      this.projects$.next(result);
    }, error => console.error(error));
  }

  purgeProjects(): void {
    this.projectHttpService.purgeProjects().subscribe(result => {
      this.projects$.next(result);
    }, error => console.error(error));
  }
}
