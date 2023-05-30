import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel, TabModel } from '../dynamic/models/tab.model';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  saveData(data: DataModel): Observable<TabModel[]> {
    return this.http.post<TabModel[]>(this.baseUrl + 'view/saveData', data);
  }

  getViewData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'view/getData');
  }
}
