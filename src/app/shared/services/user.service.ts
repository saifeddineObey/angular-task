import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users/';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editUser(user: User): Observable<any> {
    return this.http.patch(this.usersUrl + user.id, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.usersUrl + id);
  }
}