import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeStructure } from './employeeStructure';

@Injectable({
  providedIn: 'root'
})
export class Employee {
  public apiServerUrl = '';
  constructor(private http: HttpClient){ }

  public getEmployees(): Observable<EmployeeStructure[]>{
    return this.http.get<EmployeeStructure[]>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmployee(employee: EmployeeStructure): Observable<EmployeeStructure>{
    return this.http.post<EmployeeStructure>(`${this.apiServerUrl}/employee/add`, employee);
  }

  public updateEmployee(employee: EmployeeStructure): Observable<EmployeeStructure>{
    return this.http.put<EmployeeStructure>(`${this.apiServerUrl}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }

  
}
