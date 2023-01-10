import { Component, OnInit } from '@angular/core';
import { AdministracionNetsolcaService } from '../../services/administracion-netsolca.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
articulos:any;
  
  art={
    id_usuario:0,
    nombre:"",
    apellido:'',
    telefono:'',
    correo: ''
  }

  constructor(private AdministracionNetsolcaServicio: AdministracionNetsolcaService ) {}

  ngOnInit() {
    
  }

  seleccionar(codigo:number) {
    this.AdministracionNetsolcaServicio.mostrar(codigo).subscribe((result:any) => this.art = result[0]);
  }
}
