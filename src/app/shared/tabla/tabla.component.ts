import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  users: any[] = [
    {
      a: 'sffffffffff',
      b: 'fffffffffffff'
    },
    {
      a: 'sffffffffff',
      b: 'fffffffffffff'
    },
    {
      a: 'sffffffffff',
      b: 'fffffffffffff'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
