import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout'),
        children: [

            {
                path: 'clientes',
                loadComponent: () => import('./Opciones/Clientes/lista-clientes/clientes')
            },
            {
                path: 'clientes/crear',
                loadComponent: () => import('./Opciones/Clientes/Crear-cliente/crear-cliente/crear-cliente')
            },
             {
                // Esto se tiene que adaptar con el idd
                path: 'clientes/editar', 
                loadComponent: () => import('./Opciones/Clientes/editar-clientes/editar-clientes')
            },
            {
                path: 'proveedores',
                loadComponent: () => import('./Opciones/proveedores/proveedores')
            },
            {
                path: '',
                redirectTo: 'clientes',
                pathMatch: 'full'
            }
        ]

    },
    {
        path: '**',
        redirectTo: 'clientes'
    }



];
