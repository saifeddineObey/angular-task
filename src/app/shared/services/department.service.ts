import { Injectable } from '@angular/core';
import { Department } from '../models/department.model'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departmentsUrl = 'api/departments/';
  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.departmentsUrl, department).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editDepartment(department: Department): Observable<any> {
    return this.http.patch(this.departmentsUrl + department.id, department);
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(this.departmentsUrl + id);
  }
}