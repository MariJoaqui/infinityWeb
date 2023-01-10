import { Component, OnInit } from '@angular/core';

interface SectionNames {
  link: string;
  icon: string;
  name: string;
}

interface Users {
  userName: string;
  userType: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Botones del menú
  sectionNames: SectionNames[] = [
    { link: './clientes', icon: 'group', name: 'Clientes' },
    { link: './usuarios', icon: 'account_circle', name: 'Usuarios' },
    { link: './inventario', icon: 'inventory_2', name: 'Inventario' }
  ];

  //Botón de opciones de usuario
  open: number = 0; //Cerrado

  profileOptions() {

    if ( this.open === 0 ) {
      this.open = 1; //Se abre
    }
    else if ( this.open === 1 ) {
      this.open = 0; //Se cierra
    }

  }

  close() {
    this.open = 0;
  }

  //Dentro del menú de usuarios
  user: Users[] = [
    {
      userName: 'Maria Moreno',
      userType: 'Master'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
