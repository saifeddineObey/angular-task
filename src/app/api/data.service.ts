import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      departments: [
        {
          id: 1,
          name: 'Marketing',
          users: [1, 4, 6],
        },
        {
          id: 2,
          name: 'Sales',
          users: [3, 2, 5],
        },
      ],
      users: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@company.com',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@company.com',
        },
        {
          id: 3,
          name: 'Bob Johnson',
          email: 'bobjohnson@company.com',
        },
        {
          id: 4,
          name: 'Alice Brown',
          email: 'alicebrown@company.com',
        },
      ],
    };
  }
}
