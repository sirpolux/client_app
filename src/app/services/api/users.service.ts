import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInResponse } from '../model/login-response-representation';
import { LoginComponent } from '../../login/login.component';
import { LoginCredentialsRepresentation } from '../model/login-credential-representation';
import { UserRepresentation } from '../model/user-representation';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = "http://localhost:8080/api/v1/"
  constructor(
    private http:HttpClient
  ) {
    
   }

   login(loginCredentials:LoginCredentialsRepresentation ){
      const loginUrl = `${this.baseUrl}auth/authenticate`;
      return this.http.post<LoginInResponse>(loginUrl, loginCredentials);
   }

   signup(signUpCredentials:UserRepresentation){
      const signUpUrl = `${this.baseUrl}auth/register`;
      return this.http.post<LoginInResponse>(signUpUrl, signUpCredentials);
      
   }
}
