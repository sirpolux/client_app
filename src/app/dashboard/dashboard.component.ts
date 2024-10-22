import { Component } from '@angular/core';
import { ClientRepresentation } from '../services/model/client-representation';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
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


    private clientData:[ClientRepresentation]=[{}]

    newClient(){

    }

    addClient(){
      const clienrData:ClientRepresentation={
          name:this.name,
          accountNumber:this.accountNumber,
          description:this.decription
      }
      console.log(clienrData)
    }
}
