import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout'),
        children:[

            {
                path: 'clientes',
                loadComponent: () => import('./Opciones/clientes/clientes')
            },
             {
                path: 'proveedores',
                loadComponent: () => import('./Opciones/proveedores/proveedores')
            },
             {
                path: '',
                redirectTo: 'clientes',
                pathMatch:'full'
            }
        ]

    },
    {
        path:'**',
        redirectTo: 'clientes'
    }



];
