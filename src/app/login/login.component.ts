import { Component } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/api/users.service';
import { LoginCredentialsRepresentation } from '../services/model/login-credential-representation';
import { LoginInResponse } from '../services/model/login-response-representation';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    email:string="";
    password:string=""

    constructor(
      private service:UsersService
    ){
      
    }

    loginDataResponse:LoginInResponse={};

    onSubmit(){
      
      const credentials:LoginCredentialsRepresentation ={
        password:this.password,
        email:this.email
      }
      console.log(credentials)
      this.service.login(credentials)
      .subscribe({
        next:(result:LoginInResponse)=>{
          console.log(result);
          this.loginDataResponse = result;
        }, 
        error:(error:HttpErrorResponse)=>{
          console.log(error.message)
          if(error.error instanceof ErrorEvent){
            console.error("An Error occur: ", error.message);
          }
        }
      })

    }

}
