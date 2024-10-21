import { Injectable } from '@angular/core';
import { TokenRepresentation } from '../model/token-representation';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

  ) { }

   token:TokenRepresentation={
    token:"",
    expiresAt:""
   };

  updateToken(token:string, expiresAt:string ){
    this.token.token=token;
    this.token.expiresAt=expiresAt;
  }

  getToken():TokenRepresentation{
    return this.token;
  }

}
