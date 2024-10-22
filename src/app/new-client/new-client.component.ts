import { Component } from '@angular/core';
import { ClientRepresentation } from '../services/model/client-representation';
import { AuthService } from '../services/api/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss'
})

export class NewClientComponent {
  name?:string;
  accountNumber?:string;
  description?:string;

  constructor(
    private authService:AuthService
  ){

  }

  onSubmit(){
    const clientData:ClientRepresentation={
        name:this.name,
        accountNumber:this.accountNumber,
        description:this.description
    }
    console.log(clientData);
    console.log(this.authService.getToken());
    
  }
}
