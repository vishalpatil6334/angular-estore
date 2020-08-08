import { Login } from './../models/login.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public signIn(login:Login){
    localStorage.setItem('login',JSON.stringify(login.password));
  }
  public isLoggedIn(){
    return localStorage.getItem('login') !== null;
  }
  public logout(){
    localStorage.removeItem('login');
  }
}
