import { Component } from '@angular/core';
import { ClientRepresentation } from '../services/model/client-representation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

    name?:string="";
    accountNumber?:string="";
    decription?:string="";

    isClientModalVisible = false;

    closeClientModal(){
      this.isClientModalVisible = false;
    }
    openClientModal(){;
      this.isClientModalVisible = true
    }


    private clientData:[ClientRepresentation]=[
      {
        name:"Peter John",
        
      }
    ]

    newClient(){

    }

    addClient(){
      const clientData:ClientRepresentation={
          name:this.name,
          accountNumber:this.accountNumber,
          description:this.decription
      }
      console.log(clientData)
    }
}
