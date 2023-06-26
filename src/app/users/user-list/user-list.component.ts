import { Component, Input, SimpleChanges } from '@angular/core';
import { User } from "../../shared/models/user.model"
import { UserService } from "../../shared/services/user.service"

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  user : User = {
    email:'',
    name: '',
    id: null
  }
  edit = true;
  add = false;
  users: User[]=[];
  @Input() departmentId: any; 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['departmentId'] && !changes['departmentId'].firstChange) {
      this.getUsers();
    }
  }

  private getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users.filter(user => this.departmentId.includes(user.id));
    });
  }

  addUser() {
    const data = {
      email: this.user.email,
      name: this.user.name,
      id: this.user.id
    };
    this.userService.createUser(data).subscribe(response => {
      this.getUsers();
      this.resetValues()
    });
  }

  setUserEdit(user: User) {
    this.user.email = user.email;
    this.user.name = user.name;
    this.user.id = user.id ;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.user.email = "";
    this.user.name = "";
    this.user.id = null;
    this.edit = true;
    this.add = false;
  }

  removeUser(user: User) {
    const id = user.id;
    if (id !== null) {
      this.userService.deleteUser(id).subscribe(user => console.log(user));
    this.getUsers()
    }
  }

}
