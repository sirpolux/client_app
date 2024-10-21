import { Component } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/api/users.service';
import { LoginCredentialsRepresentation } from '../services/model/login-credential-representation';
import { LoginInResponse } from '../services/model/login-response-representation';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/api/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  // Corrected styleUrls
})
export class LoginComponent {

    email: string = "";
    password: string = "";

    constructor(
      private service: UsersService,
      private authService: AuthService
    ) {}

  
    loginDataResponse: LoginInResponse | undefined;

    onSubmit() {
      const credentials: LoginCredentialsRepresentation = {
        password: this.password,
        email: this.email
      };

      console.log(credentials);

      this.service.login(credentials)
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
    }
}