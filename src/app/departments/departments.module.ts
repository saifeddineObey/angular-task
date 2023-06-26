import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from '../users/users.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    DepartmentListComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    UsersModule,
    ButtonModule,
    InputTextModule,
    TableModule
  ],
  exports: [DepartmentListComponent]

})
export class DepartmentsModule { }
