import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'inventario',
        component: InventarioComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: '**',
        redirectTo: 'clientes'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionNetsolcaRoutingModule { }
