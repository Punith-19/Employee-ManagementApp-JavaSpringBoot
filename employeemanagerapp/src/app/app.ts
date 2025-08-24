import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeStructure } from './employeeStructure';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { FormsModule, NgForm } from '@angular/forms';
import { error } from 'node:console';
import { response } from 'express';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  public employees: EmployeeStructure[]=[];
  public editEmployee!: EmployeeStructure | null;
  public deleteEmployee!: EmployeeStructure | null;

  constructor(private employeeServices: Employee){}
  ngOnInit(){
    this.getEmployee();
  }
  public getEmployee(): void{
    this.employeeServices.getEmployees().subscribe(
      (response: EmployeeStructure[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }
  
  public onAddEmployee(addForm: NgForm): void{
    document.getElementById('add-employee-form')?.click();
    this.employeeServices.addEmployee(addForm.value).subscribe(
      (response: EmployeeStructure)=> {
        console.log(response);
        this.getEmployee();
        addForm.reset();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    );
  } 

  public searchEmployees(key: string): void{
    const results: EmployeeStructure[] = [];
    for(const employee of this.employees){
      if(employee.name.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 || 
      employee.email.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 || 
      employee.phone.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1|| 
      employee.jobTitle.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1){
        results.push(employee);
      }
    }
    this.employees = results;
    if(results.length===0 || !key){
      this.getEmployee();
    }
  }

  public onOpenModal(employee:EmployeeStructure | null, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if(mode === 'edit'){
      this.editEmployee=employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if(mode === 'delete'){
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onUpdateEmployee(employee: EmployeeStructure): void{
    
    this.employeeServices.updateEmployee(employee).subscribe(
      (response: EmployeeStructure)=> {
        console.log(response);
        this.getEmployee();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public onDeleteEmployee(employeeId: number): void{
    
    this.employeeServices.deleteEmployee(employeeId).subscribe(
      (response: void)=> {
        console.log(response);
        this.getEmployee();
        document.getElementById('delete-employee-modal-close-button')?.click();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
}
