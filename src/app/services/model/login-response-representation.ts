import { LoginDataRepresentation } from "./login-data-representation";

export interface LoginInResponse{
    status?:boolean,
    message?:string,
    data?:LoginDataRepresentation
}