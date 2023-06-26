import { Component, OnInit } from '@angular/core';
import { Department } from "../../shared/models/department.model"
import { DepartmentService } from "../../shared/services/department.service"

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  department:Department = {
    users:[],
    name: '',
    id: null
  }
  edit = true;
  add = false;
  departments: Department[]=[];
  selectedDepartmentUsers: any = null;


  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.getDepartments()
  }

  private getDepartments() {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }
  getDepartmentUsers(departmentId: any) {
    this.selectedDepartmentUsers = departmentId;
  }
  addDepartment() {
    const data = {
      users: this.department.users,
      name: this.department.name,
      id: this.department.id
    };
    this.departmentService.createDepartment(data).subscribe(response => {
      this.getDepartments();
      this.resetValues()
    });
  }

  setDepartmentEdit(department: Department) {
    this.department.users = department.users;
    this.department.name = department.name;
    this.department.id = department.id ;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.department.name = "";
    this.department.id = null;
    this.edit = true;
    this.add = false;
  }

  removeDepartment(department: Department) {
    const id = department.id;
    if (id !== null) {
      this.departmentService.deleteDepartment(id).subscribe(department => console.log(department));
      this.getDepartments();
    }
  }
}
