import { Component, OnInit } from '@angular/core'; // Importa OnInit si la usas
import { CommonModule } from '@angular/common'; // 👈 ¡NUEVA IMPORTACIÓN CLAVE!
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true, 
  imports: [
    CommonModule,       
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit { 

  isClientesOpen: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }
}