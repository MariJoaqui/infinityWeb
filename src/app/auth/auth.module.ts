import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';


@NgModule({
  declarations: [
    RecuperarPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
