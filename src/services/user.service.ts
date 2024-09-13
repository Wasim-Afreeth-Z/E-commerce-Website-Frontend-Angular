import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http: HttpClient = inject(HttpClient)
  private baseUrl = environment.BASEURL;

  // send the user data to database
  SignUp(request: any): Observable<any> {
    const header = new HttpHeaders({
      'content-type': 'Application/json'
    })
    return this.http.post(`${this.baseUrl}/user/signup/`, request, { headers: header })
  }

  // check user data is there or not
  login(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login/`, request);
  }

  // Save the token in database
  Token(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/token/`, request);
  }

  // remove token form database in users table when logout
  TokenRemove(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/tokenremove/`, request);
  }

  //get user detail
  getuser(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/getuser/${id}`);
  }

  //Update the user detail
  UpdateUser(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/user/update/${id}`, data);
  }

  // delete the User Account
  deleteAccount(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/delete/${id}`)
  }

}
