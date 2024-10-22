import { Component, Input } from '@angular/core';
import { ClientRepresentation } from '../services/model/client-representation';

@Component({
  selector: 'app-dashboard-list',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-list.component.html',
  styleUrl: './dashboard-list.component.scss'
})
export class DashboardListComponent {

  @Input()
  data:ClientRepresentation={}


  @Input()
  index:number=-1
}
