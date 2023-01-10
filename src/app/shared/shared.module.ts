import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { BuscadorComponent } from './buscador/buscador.component';
import { TablaComponent } from './tabla/tabla.component';


@NgModule({
  declarations: [
    BuscadorComponent,
    TablaComponent
  ],
  exports: [
    BuscadorComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
