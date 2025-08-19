import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeStructure } from './employeeStructure';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  public employees: EmployeeStructure[]=[];

  constructor(private employeeServices: Employee){}
  ngOnInit(){
    this.getEmployee();
  }
  public getEmployee(): void{
    this.employeeServices.getEmployees().subscribe(
      (response: EmployeeStructure[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
