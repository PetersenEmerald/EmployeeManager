import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectHttpService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.baseUrl + 'project');
  }

  newProject(project: ProjectModel): Observable<ProjectModel[]> {
    return this.http.post<ProjectModel[]>(this.baseUrl + 'project/newProject', project);
  }

  editProject(project: ProjectModel): Observable<ProjectModel[]> {
    return this.http.post<ProjectModel[]>(this.baseUrl + 'project/editProject', project);
  }

  deleteProject(projectID: number): Observable<ProjectModel[]> {
    return this.http.delete<ProjectModel[]>(this.baseUrl + 'project/' + projectID);
  }

  purgeProjects(): Observable<ProjectModel[]> {
    return this.http.delete<ProjectModel[]>(this.baseUrl + 'project/purgeProjects');
  }
}
