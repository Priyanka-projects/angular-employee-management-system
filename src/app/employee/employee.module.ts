import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';



@NgModule({
  declarations: [EmployeeListComponent, AddEmployeeComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
