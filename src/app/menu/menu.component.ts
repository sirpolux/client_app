import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(
    private router:Router
  ){}

  toggleMenu(){
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu){
      mobileMenu.classList.toggle('hidden');
    }
  }
}
