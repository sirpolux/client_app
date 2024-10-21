import { Component, OnInit, Output, output } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(
    private router:Router
  ){}

  @Output()
  active_tabs:{[key:string]:boolean}={
    'login':true,
    'dashboard':false,
    'signUp':true
  };

  

  toggleMenu(){
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu){
      mobileMenu.classList.toggle('hidden');
    
    }
  }

  @Output()
  updateActiveItems(name:string, value:boolean){
    this.active_tabs[name]=value
  }

  
  
}
