import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeStructure } from './employeeStructure';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
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

  public onOpenModal(employee:Employee | null, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addEmployeeModel');
    }
    if(mode === 'edit'){
      button.setAttribute('data-target', '#updateEmployeeModel');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target', '#deleteEmployeeModel');
    }
    container?.appendChild(button);
    button.click();
  }
}
