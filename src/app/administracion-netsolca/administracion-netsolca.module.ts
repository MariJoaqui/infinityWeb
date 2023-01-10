import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AdministracionNetsolcaRoutingModule } from './administracion-netsolca-routing.module';

import { LoginComponent } from '../auth/pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    ClientesComponent,
    UsuariosComponent,
    InventarioComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AdministracionNetsolcaRoutingModule
  ]
})
export class AdministracionNetsolcaModule { }
