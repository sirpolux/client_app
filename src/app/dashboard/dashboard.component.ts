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
        {name: "Peter Mike", accountNumber: "0044347789", description: "Some of our clients are here"},
        {name: "Peter Mike", accountNumber: "0044347789", description: "Some of our clients are here"},
        {name: "Peter Mike", accountNumber: "0044347789", description: "Some of our clients are here"},
        {name: "Peter Mike", accountNumber: "0044347789", description: "Some of our clients are here"},
        {name: "Peter Mike", accountNumber: "0044347789", description: "Some of our clients are here"},
        {name: "Peter Mike", accountNumber: "0044347789", description: "Some of our clients are here"},
        {name: "Peter Mike", accountNumber: "0044347789", description: "Some of our clients are here"},
        {name: "Peter Mike", accountNumber: "0044347789", description: "Some of our clients are here"},
        {name: "Peter Mike", accountNumber: "0044347789", description: "Some of our clients are here"},
        {name: "Peter Mike", accountNumber: "0044347789", description: "Some of our clients are here"}
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
