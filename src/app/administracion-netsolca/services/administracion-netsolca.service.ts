import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministracionNetsolcaService {

  url = '';

  constructor(private http: HttpClient) { }

  mostrar( codigo: number ) {
    return this.http.get(`${this.url}/mostrar.php?codigo=${codigo}`);
  }
}
