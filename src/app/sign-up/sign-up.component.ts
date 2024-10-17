import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  onSubmit(){
    console.log(this.firstname)
  }


}
