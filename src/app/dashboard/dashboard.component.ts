import { Component, Output } from '@angular/core';
import { ClientRepresentation } from '../services/model/client-representation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardListComponent } from "../dashboard-list/dashboard-list.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardListComponent],
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

  
    clientData:ClientRepresentation[]=[
      { name: "Peter Mike", accountNumber: "0044347789", description: "Client specializing in retail." },
      { name: "Alice Johnson", accountNumber: "0044347790", description: "Client focused on e-commerce." },
      { name: "John Doe", accountNumber: "0044347791", description: "Client in the tech industry." },
      { name: "Mary Smith", accountNumber: "0044347792", description: "Client managing a health service." },
      { name: "Tom Brown", accountNumber: "0044347793", description: "Client running a local bakery." },
      { name: "Linda Green", accountNumber: "0044347794", description: "Client offering online courses." },
      { name: "Chris White", accountNumber: "0044347795", description: "Client with a consulting firm." },
      { name: "Sarah Black", accountNumber: "0044347796", description: "Client in the automotive sector." },
      { name: "James Grey", accountNumber: "0044347797", description: "Client specializing in finance." },
      { name: "Laura Blue", accountNumber: "0044347798", description: "Client operating a travel agency." }
  
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
