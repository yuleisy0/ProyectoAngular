// En tu archivo: ./Opciones/clientes/clientes.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 ¡NUEVA IMPORTACIÓN CLAVE!
import { RouterOutlet, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-clientes',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export default class ClientesComponent { 

}