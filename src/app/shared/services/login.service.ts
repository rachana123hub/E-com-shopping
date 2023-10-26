import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from '../models/login.model';
import { ConstantLabel } from '../constant-label';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000/login'


  getUsers(): Observable<ILogin[]> {
    return this.httpClient.get<ILogin[]>(this.baseUrl);
  }

  isLoggedIn() {
    return !!localStorage.getItem(ConstantLabel.currentUserToken);
  }

  logout() {
    return localStorage.removeItem(ConstantLabel.currentUserToken);
  }
  getToken() {
    return localStorage.getItem(ConstantLabel.currentUserToken);
  }

}
