import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService  } from '../services/api/users.service';
import { UserRepresentation } from '../services/model/user-representation';
import { LoginInResponse } from '../services/model/login-response-representation';
import { AuthService } from '../services/api/auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  
  firstname:string ="";
  lastname:string="";
  email:string="";
  password:string="";
  confirmPassword:string="";


  loginDataResponse: LoginInResponse | undefined;


  constructor(
    private service:UsersService,
    private authService:AuthService
  ){

  }

  onSubmit(){
    const userData:UserRepresentation={
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword
    }


    this.service.signup(userData)
        .subscribe({
          next: (result: LoginInResponse) => {
            console.log(result);
            this.loginDataResponse = result;
            if (this.loginDataResponse?.data?.token && this.loginDataResponse.data?.expiresAt) {
              this.authService.updateToken(this.loginDataResponse.data.token, this.loginDataResponse.data.expiresAt);
            }
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.message);
            if (error.error instanceof ErrorEvent) {
              console.error("An error occurred: ", error.message);
            } else {
              console.error("Backend returned code: ", error.status, "body was: ", error.error);
            }
          }
        });

    console.log(this.firstname)
  }


}
